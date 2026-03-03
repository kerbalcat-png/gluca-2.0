from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import dotenv
import os
from barcode import barcode_read
import openfoodfacts
import cv2
from pyzbar.pyzbar import decode

app = Flask(__name__)
CORS(app)

load_dotenv()
Spoonacular_Api_Key = os.getenv("Spoonacular_Api_Key")


@app.route("/")
def home():
    return "Flask is running! Use /spoon/<query>?type=breakfast&number=5 to search recipes."

@app.route("/barcode", methods=["GET"])
def process_barcode():
    image_file = request.files["file"]
    image_file.save(image_file.filename)
    item_code = barcode_read(image_file.filename)
    # off_get_catagories(item_code)

@app.route("/barcode/test", methods=["GET"])
def process_barcode_test():
    api = openfoodfacts.API(user_agent="MyAwesomeApp/1.0")
    # item_code = barcode_read("/images/crisps2")
    # item_code = 506028376763523
    # print(item_code)
    # code = "3017620422003"
    # code = "5060283763523"
    # off_get_catagories(item_code)
    # return("ok")
    code = barcode_read("crisps1.jpg")
    results = api.product.get(code, fields=["categories_hierarchy"])
    return(results)
    

def get_recipies():
    pass

@app.route("/barcode/test/read", methods=["GET"])
def test_read():
  barcode_read("crisps1.jpg")


# def off_get_catagories(item_code):

#     url = f"https://world.openfoodfacts.net/api/v2/product/{item_code}.json"
#     results = requests.get(url, headers={"Authorization": "Basic " ,"btoa": ("off:off") })
#     print("results", results.text)

@app.route("/spoon/<string:query>", methods=["GET"])
def get_spoon(query):
    meal_type = request.args.get("type")
    number = int(request.args.get("number", 5))

    url = "https://api.spoonacular.com/recipes/complexSearch"
    params = {
        "query": query,
        "number": number,
        "apiKey": Spoonacular_Api_Key
    }

    if meal_type:
        params["type"] = meal_type

    response = requests.get(url, params=params)

    if response.status_code == 200:
        print("and here to ")
        return jsonify(response.json())
    else:
        return jsonify({
            "error": "Request failed",}), 404
    

@app.route("/name/<string:query>", methods=["GET"])
def get_name(query):
    url = "https://api.spoonacular.com/recipes/complexSearch"
    params = {
        "query": query,
        "number": 5,
        "apiKey": Spoonacular_Api_Key
    }

    response = requests.get(url, params=params)

    if response.status_code != 200:
        return jsonify({"error": "search failed"}), response.status_code

    data = response.json()

    if not data.get("results"):
        return jsonify({"error": "No recipe was found for that name"})

    recipes_full_info = []

    for recipe in data["results"]:
        recipe_id = recipe["id"]

        info_url = f"https://api.spoonacular.com/recipes/{recipe_id}/information"
        info_params = {
            "includeNutrition": "true",
            "apiKey": Spoonacular_Api_Key
        }

        info_response = requests.get(info_url, params=info_params)

        if info_response.status_code == 200:
            recipes_full_info.append(info_response.json())
        else:
            print(f"Failed to fetch info for recipe ID {recipe_id}")

    return jsonify(recipes_full_info)





    

if __name__ == "__main__":
    print("Flask app starting...")
    app.run(debug=True)