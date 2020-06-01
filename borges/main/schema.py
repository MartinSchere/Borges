from graphene_django import DjangoObjectType
import graphene
from .models import ProductModel, CategoryModel


class CategoryType(DjangoObjectType):
    class Meta:
        model = CategoryModel


class ProductType(DjangoObjectType):
    class Meta:
        model = ProductModel


class CategoryInput(graphene.InputObjectType):
    title = graphene.String()


class ProductInput(graphene.InputObjectType):
    title = graphene.String()
    category = graphene.Field(CategoryInput)


class Query(graphene.ObjectType):
    products = graphene.List(ProductType)
    categories = graphene.List(CategoryType)

    def resolve_products(self, info):
        return ProductModel.objects.all()

    def resolve_categories(self, info):
        return CategoryModel.objects.all()


class CreateProduct(graphene.Mutation):
    class Arguments:
        product_data = ProductInput(required=True)

    product = graphene.Field(ProductType)

    @staticmethod
    def mutate(self, info, product_data):
        product = ProductModel.objects.create(
            title=product_data.title, category=CategoryModel.objects.get(title=product_data.category.title))
        product.save()
        return CreateProduct(product=product)


class CreateCategory(graphene.Mutation):
    class Arguments:
        title = graphene.String()

    category = graphene.Field(CategoryType)

    def mutate(self, info, title):
        category = CategoryModel(title=title)
        category.save()
        return CreateCategory(category=category)


class Mutations(graphene.ObjectType):
    create_product = CreateProduct.Field()
    create_category = CreateCategory.Field()


schema = graphene.Schema(query=Query, mutation=Mutations)
