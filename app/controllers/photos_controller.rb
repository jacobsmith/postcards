class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :update, :destroy, :img]

  # GET /photos
  def index
    @photos = Photo.all

    render json: @photos
  end

  def img
    filename = "tmp/" + SecureRandom.hex(20) + ".#{@photo.image_extension}"
    File.open(filename, 'wb') do |f|
      f.write Base64.decode64(@photo.data.gsub!(/\Adata:.+base64,/, ""))
    end

    send_file filename
  end

  # GET /photos/1
  def show
    render json: @photo
  end

  # POST /photos
  def create
    image_data = params[:imgSrc]
    image_filename = params[:imgName]

    image_extension = image_filename.split(".").last

    filename = [SecureRandom.hex(20), image_extension].join(".")

    original_match = image_data.match(/\Adata:.+base64,/)[0]
    image_data.gsub!(/\Adata:.+base64,/, "")
    saved_image = File.open(filename, "wb") do |f|
      f.write(Base64.decode64(image_data))
    end

    mini_magick_image = MiniMagick::Image.new(filename)
    mini_magick_image.geometry('1875x1275!')

    encoded_string = Base64.encode64(File.open(filename, "rb").read)
    image_data = original_match + encoded_string

    File.delete(filename)

    binding.pry
    photo = Photo.new(data: image_data, image_extension: image_extension)

    if photo.save
      render json: { id: photo.id, photo: photo }, status: :created, location: photo
    else
      render json: photo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /photos/1
  def update
    if @photo.update(photo_params)
      render json: @photo
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /photos/1
  def destroy
    @photo.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def photo_params
      params.require(:photo).permit(:data)
    end
end
