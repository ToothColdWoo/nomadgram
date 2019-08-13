from django.urls import path
from . import views

app_name="images"
urlpatterns = [
   path("", view=views.Images.as_view(), name='feed'),
   path("search/",view=views.Search.as_view(),name='search'),
   path("<int:image_id>/likes/", view=views.LikeImage.as_view(),name='like_image'),
   path("<int:image_id>/unlikes/", view=views.UnLikeImage.as_view(),name='unlike_image'),
   path("<int:image_id>/comments/",view=views.CommentOnImage.as_view(),name='comment_image'),
   path("<int:image_id>/comments/<int:comment_id>",view=views.ModerateComment.as_view(),name='moderate_comment'),
   path("comments/<int:comment_id>/",view=views.Comment.as_view(),name='comment'),
   path("<int:image_id>/",view = views.ImageDetail.as_view(),name='feed')
]

# /images/3/like/
#0 create the url and the view
#1 take the id from the url
#2 we want to find an image with this id
#3 we want to create a like for that image