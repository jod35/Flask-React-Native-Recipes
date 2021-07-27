from flask import Flask,request,jsonify
from flask_restx import Api,Resource,fields
from flask_cors import CORS
from exts import db
from config import Config
from models import Recipe

app=Flask(__name__)
app.config.from_object(Config)

api=Api(app,doc='/docs')
db.init_app(app)

CORS(app)



#a model for the Recipes

recipe_model=api.model(
    "Recipe",{
        "id":fields.Integer(),
        "title":fields.String(),
        "description":fields.String()
    }
)



@api.route('/hello')
class Hello(Resource):
    def get(self):
        return {"message":"Hello World"}


@api.route('/recipes')
class Recipes(Resource):

    @api.marshal_list_with(recipe_model)
    def get(self):
        """Get all recipes"""
        recipes=Recipe.query.all()

        return recipes,200


    def post(self):
        """Create a recipe"""


        data=request.get_json()

        new_recipe=Recipe(title=data.get('title'),
                            description=data.get('description')
        )

        new_recipe.save()

        return jsonify({"message":"Created a Recipe"})


@api.route('/recipe/<int:id>')
class RecipeResource(Resource):
    @api.marshal_with(recipe_model)
    def get(self,id):
        """Get a recipe by its ID"""
        

        recipe=Recipe.query.get_or_404(id)

        return recipe


    @api.marshal_with(recipe_model)
    def put(self,id):
        """Update a recipe by its ID"""

        data=request.get_json()

        recipe=Recipe.query.get_or_404(id)

        recipe.update(data.get('title'),data.get('description'))

        return recipe,200
        
    @api.marshal_with(recipe_model)
    def delete(self,id):
        """Delete a recipe by its ID"""
        recipe=Recipe.query.get_or_404(id)

        recipe.delete()

        return recipe,200



@app.shell_context_processor
def make_shell_context():
    return {
        'db':db,
        'Recipe':Recipe
    }




if __name__ == '__main__':
    app.run(debug=True)