#Made by FoxSinOfGreed1729 
#Many thanks to TJ O'Connor and FossAsia
from ip2geotools.databases.noncommercial import DbIpCity
import socket

def geolocator(adr):
  ipadr = ""
  if adr[0].isdigit():
    ipadr = adr
  else:
    ipadr=socket.gethostbyname(adr)
    
  response=DbIpCity.get(ipadr, api_key='free')
  ip_address = response.ip_address
  region = response.region
  country = response.country
  city = response.city
  latitude = response.latitude
  longitude = response.longitude
  location_data = [ip_address, region, country, city, latitude, longitude]
  return location_data
  
