#use: from barcode import barcode_read
import cv2
from pyzbar.pyzbar import decode

def barcode_read(imagePath):
      #  try:
   # read the image in numpy array using cv2
    img = cv2.imread(imagePath)
     
    if img is None:
        return "Image not found or path is incorrect!"

    # Decode the barcode image
    detectedBarcodes = decode(img)
     
    
    # If not detected then print the message
    if not detectedBarcodes:
        print("Barcode Not Detected or your barcode is blank/corrupted!")
    else:
      
          # Traverse through all the detected barcodes in image
        for barcode in detectedBarcodes:
            
            if barcode.data!="":
              
            # Print the barcode data
                print(barcode.data)
                print(barcode.type)
        
        return barcode.data
        

#print(barcode_read("computer2.jpg"))
#print(barcode_read(""))