class WellKnownController < ApplicationController
  def show
    render text: ENV["WELL_KNOWN_REPSONSE"]
  end
end
