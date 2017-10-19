$Lob = Lob::Client.new(api_key: ENV['LOB_API_KEY'] || 'undefined')

$LobTest = Lob::Client.new(api_key: ENV['LOB_TEST_API_KEY'] || 'undefined')
