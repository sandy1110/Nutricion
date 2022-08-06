import sys
eth_value = 1750
eth_in_wei = 1000000000000000000
scale = 100000

def getEthValueInScale(amount):
    print(round(amount/eth_value, 2) * eth_in_wei / scale)

getEthValueInScale(float(sys.argv[1]))
