# server.py - COMPLETE CORRECTED VERSION
import http.server
import socketserver

PORT = 8000

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Cache control headers
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        # CORRECT: super().end_headers() not super().__init__()
        super().end_headers()

# Server start karo
with socketserver.TCPServer(("", PORT), NoCacheHTTPRequestHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped")