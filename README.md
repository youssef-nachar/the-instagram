<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Satisfy&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./index.css">
</head>
<body>
    <div class="container">


        <!-- ===============the navbar================================== -->
        <div class="navbar">
            <div class="logo">
                <h1>instagram</h1>
            </div>
            <div class="details">
                    <i class='bx bx-heart icon'></i>
                    <i class='bx bxl-messenger icon'></i>
            </div>

        </div>
        <!-- ===============================================the navbarend=================================== -->





    <!-- ======================================= the profile start =====================-->
        <div class="container-profile">
            <div class="profile-nabvar">
                <h1>youssef.nashar</h1>
                <div>
                        <i class='bx bx-plus-circle profile-icon '></i>
                        <i class='bx bx-align-justify profile-icon'></i> 

                </div>
            </div>
                <div class="the-profile">
                    <div class="profile-img">
                        <img class="a" src="image2.jpg">
                        <h4>Youssef.N</h4>
                    </div>
                    <div class="numbreofposts">
                        <h4>0</h4>
                        <h4>posts</h4>
                    </div>
                    <div class="numbreofposts">
                        <h4>283</h4>
                        <h4>followers</h4>
                    </div>
                    <div class="numbreofposts">
                            <h4>884</h4>
                            <h4>following</h4>
                    </div>
                </div>
                <div class="edit">
                    <button>Edit profile</button>
                    <button>shar profile</button>
                </div>
                <div class="footer-profile">
                <i class='bx bx-plus-circle f'></i> 
                <h5>New</h5>
                </div>
                <footer>
                        <div class="footer">
                            <i class='bx bx-home footer-icon' onclick="go_hom()" ></i>
                            <i class='bx bx-search footer-icon'></i>
                            <i class='bx bx-plus-circle footer-icon'></i> 
                            <i class='bx bx-movie-play footer-icon'></i>
                            <img class="footer-profile" onclick="go_profile()" src="image2.jpg">
                        </div>
                    </footer> 
            </div>
         <!-- =============================the profile end==================================== -->


         <!-- ====================================the storie start============================= -->
        <div class="stories">
            <div class="the-storie">
                <img src="image2.jpg" alt="">
                <p>your story</p>
            </div>
            <div class="the-storie">
                <img src="image1.jpg" alt="">
                <p>5alid</p>
            </div>
            <div class="the-storie">
                <img src="image3.png" alt="">
                <p>mostafa</p>
            </div>
            <div class="the-storie">
                <img src="image4.png" alt="">
                <p>ahmad</p>
            </div>
            <div class="the-storie">
                <img src="image5.png" alt="">
                <p>ahmto__</p>
            </div>
            <div class="the-storie">
                    <img src="image2.jpg" alt="">
                    <p>khaloudi</p>
                </div>
        </div>
        <!-- =============================================the storie end========================= -->


        <!-- ===================================thepost start============================================ -->
        <div class="posts">
            <div class="profile">
                <img src="image1.jpg">
                <p>mtv lebanon.news</p>
            </div>
            <img class="image-post" src="https://images.rawpixel.com/image_600/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL2xyL2dldHR5MTA0MzZkLWltYWdlLmpwZw.jpg" alt="">

        </div>
        <div class="thepost-details">
            <i class='bx bx-heart icon'></i>
            <i class='bx bx-comment icon'></i>
            <i class='bx bx-share icon'></i>
        </div>
        <div class="likes">
                <h3>700 likes</h3>
            <h4>Mtvlebanon: <span>Lorem ipsum inventore. Inventore, voluptate error?</span></h4>       
            <p class="comment">view all 400 comments</p>
            <input type="text" placeholder="add a comment">
            <i class='bx bx-send theicon'></i>
        
        </div>
        <div class="posts">
                <div class="profile">
                    <img src="image3.png">
                    <p>Mostafa</p>
                </div>
                <img class="image-post" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2xyL2ZuZzIwNjM4MjktaW1hZ2UuanBn.jpg" alt="">
    
            </div>
            <div class="thepost-details">
                <i class='bx bx-heart icon'></i>
                <i class='bx bx-comment icon'></i>
                <i class='bx bx-share icon'></i>
            </div>
            <div class="likes">
                    <h3>700 likes</h3>
                <h4>Mostafa <span>Lorem ipsum inventore. Inventore, voluptate hdnd jdidjd jdbdi idhsi jsi ji error?</span></h4>       
                <p class="comment">view all 400 comments</p>
                <input type="text" placeholder="add a comment">
                <i class='bx bx-send theicon'></i>
            
            </div>
            <div class="posts">
                    <div class="profile">
                        <img src="image5.png">
                        <p>Mos7sin</p>
                    </div>
                    <img class="image-post" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L2xhY21hMjQ0MDA5LWltYWdlLmpwZw.jpg" alt="">
        
                </div>
                <div class="thepost-details">
                    <i class='bx bx-heart icon'></i>
                    <i class='bx bx-comment icon'></i>
                    <i class='bx bx-share icon'></i>
                </div>
                <div class="likes">
                        <h3>700 likes</h3>
                    <h4>Mshsin<span>the life its very good</span></h4>       
                    <p class="comment">view all 400 comments</p>
                    <input type="text" placeholder="add a comment">
                    <i class='bx bx-send theicon'></i>
                
                </div>
                
            <!-- ========================================the post end============================================ -->



            <!--========================================= the footer start======================================== -->
                <footer>
                        <div class="footer">
                            <i class='bx bx-home footer-icon' onclick="go_hom()" ></i>
                            <i class='bx bx-search footer-icon'></i>
                            <i class='bx bx-plus-circle footer-icon'></i> 
                            <i class='bx bx-movie-play footer-icon'></i>
                            <img class="footer-profile" onclick="go_profile()" src="image2.jpg">
                        </div>
                    </footer> 
                    <!-- =======================================the footer end================================ -->
        </div>

       <script src="index.js"></script>
</body>

</html>
