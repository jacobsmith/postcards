json.items @addresses do |address|
  json.partial! address, locals: { address: @address }
end

json.count @addresses.length
