require 'rack/contrib'

use Rack::Deflater
use Rack::StaticCache,
  :urls => ["/images", "/javascripts", "/stylesheets", "/fonts"],
  :root => "."

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('index.html', File::RDONLY)
  ]
}
