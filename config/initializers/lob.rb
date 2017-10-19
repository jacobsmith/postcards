production_key = ENV['LOB_API_KEY']
test_key = ENV['LOB_TEST_API_KEY']

raise "Both LOB keys must be present!" unless production_key.present? && test_key.present?

$Lob = Lob::Client.new(api_key: ENV['LOB_API_KEY'] || 'undefined')

$LobTest = Lob::Client.new(api_key: ENV['LOB_TEST_API_KEY'] || 'undefined')
