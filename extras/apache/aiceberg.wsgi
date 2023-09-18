import sys 
import logging

sys.path.insert(0, '/var/www/html/')
sys.path.insert(0, '/var/www/venv/lib/python3.10/site-packages/')

# Set up logging
logging.basicConfig(stream=sys.stderr, level=logging.DEBUG)

from base import app as application