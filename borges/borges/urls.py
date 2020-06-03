from django.urls import path, include
from django.contrib import admin
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from main.views import dashboard, login_view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', dashboard),
    path('login/', login_view),
    path('admin/', admin.site.urls),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
