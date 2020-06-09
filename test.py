import socket
import json

localIP     = "127.0.0.1"
localPort   = 8088
bufferSize  = 1024 * 16
#bytesToSend         = str.encode(msgFromServer)
UDPServerSocket = socket.socket(family=socket.AF_INET, type=socket.SOCK_DGRAM)
UDPServerSocket.bind((localIP, localPort))

functions = {}

def h():
	print('hhh')

functions['h'] = h

while(True):

    bytesAddressPair = UDPServerSocket.recvfrom(bufferSize)

    args = json.loads( bytesAddressPair[0].decode("utf-8") )
	
    address = bytesAddressPair[1]

    functions[args['function']]()

    # Sending a reply to client
    #UDPServerSocket.sendto(bytesToSend, address)



