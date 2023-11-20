import KanbasNavigation from "../../KanbasNavigation/kanbasNavigation.js"
import CourseNavigation from "../CoursesNavigation/CourseNavigation.js"
export default function Home() {
    return `  <div class="wd-flex-row-container ">

    <div class="d-none d-md-block wd-bg-color-black">
       ${KanbasNavigation("Courses")}
    </div>
   
    <div class="wd-course-home-main">
        <div class="d-none d-lg-block row">
            <div class="col-8">
                <nav style="--bs-breadcrumb-divider:  '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb wd-course-header" style="padding-top: 10px; padding-left: 10px; ">
                        <i class="fa fa-bars" style="color: #C51E3A;padding-right: 20px; font-size: 25px;"
                            aria-hidden="true"></i>
                        <li class="breadcrumb-item">CS5610 Web Programming</li>
                        <li class="breadcrumb-item">Fall 2023</li>
                        <li class="breadcrumb-item">Section 2</li>
                        <li class="breadcrumb-item active" aria-current="page"><a href="#">Home</a></li>
                    </ol>
                </nav>
            </div>
            <div class="col float-end">
                <button type="button" class="btn btn-primary float-end m-1 p-2"
                    style="color:  #333333;background-color:  azure; border:  #333333 solid 1px; ">
                    <i class="fa fa-eye-slash" aria-hidden="true"></i>
                    Student Veiw</button>
            </div>
        </div>
        
<hr style="color: #333333;">


        <div class="d-none d-md-block d-sm-block d-lg-none row p-3 float-center" style="background-color: black; color: #E5E2E2; align-items: center;">
            <div >
                  <button onclick="window.location.href='mobileMenu.html'"><i class="fa fa-bars" style="padding-right: 5px; font-size: 25px;"
                            aria-hidden="true"></i></button>
                <i class="fa fa-eye-slash float-end " aria-hidden="true"></i>
                <nav style="--bs-breadcrumb-divider:  '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb wd-course-header" style="padding-top: 10px; padding-left: 10px; ">
                      
                        <li class="breadcrumb-item">CS5610 Web Programming<br>Modules</li>
                      
                    </ol>
                </nav>
            
            </div>
                   

        </div>


        <hr>
        <div class="wd-flex-row-container">
            <div class="d-none d-lg-block wd-course-nav-home mx-1">
               ${CourseNavigation()}
            </div>

            <div class="wd-flex-row-container">

                <div style="width: 800px;">
                    <div class="py-4">

                        <button type="button" class="btn btn-outline-secondary float-end m-1 p-1"> <i
                                class="fa fa-ellipsis-v " style="padding-left: 10px;"
                                aria-hidden="true"></i></button>
                        <button type="button" class="btn btn-primary float-end m-1 p-1"
                            style="background-color: #C51E3A; border: #C51E3A;">+ Modules</button>
                        <div class="btn-group float-end">
                            <button type="button"
                                class="btn btn-outline-secondary float-end m-1 p-1 dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-check-circle-o" style="color: green;" aria-hidden="true"></i>
                                Publish All
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Unpublish</a></li>
                                <li><a class="dropdown-item" href="#">Publish Selected action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>

                        </div>
                        <button type="button" class="btn btn-outline-secondary float-end m-1 p-1">Veiw
                            Progress</button>
                        <button type="button" class="btn btn-outline-secondary float-end m-1 p-1">Collapse
                            All</button>
                    </div>
                    <hr class="my-4" />
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-secondary">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-sort-desc px-2" aria-hidden="true"></i>
                            Week 0 - INTRO
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-plus float-end" style="color: darkgray;;" aria-hidden="true"></i>
                            <i class="fa fa-sort-desc px-2 float-end" aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 10px;" aria-hidden="true"></i>
                            LEARNING OBJECTIVE

                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>

                            Introduction to the course
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>


                            Learn what is Web Development
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>


                            Creating a development environment
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>


                            Creating a Web Application
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>


                            Getting started with the 1st assignment
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>

                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 10px;" aria-hidden="true"></i>

                            READING
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>
                            Full Stack Developer - Chap 1
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>
                            Full Stack Developer - Chap 2
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>
                        </li>

                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 10px;" aria-hidden="true"></i>

                            SLIDES
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>
                            <i class="fa fa-link wd-profile-ext-link" style="color:  #C51E3A;"
                                aria-hidden="true"></i>

                            <a href="#" style="color:  #C51E3A; text-decoration: none;">Introduction to Web
                                Development
                                Links to an external site.
                                <i class="fa fa-external-link" style="color: #C51E3A;" aria-hidden="true"></i>
                            </a>

                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>
                            <i class="fa fa-link wd-profile-ext-link" style="color:  #C51E3A;"
                                aria-hidden="true"></i>

                            <a href="#" style="color:  #C51E3A; text-decoration: none;">Creating an HTTP Server with
                                Node.js
                                Links to an external site.
                                <i class="fa fa-external-link" style="color: #C51E3A;" aria-hidden="true"></i>
                            </a>
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">

                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>
                            <i class="fa fa-link wd-profile-ext-link" style="color:  #C51E3A;"
                                aria-hidden="true"></i>

                            <a href="#" style="color:  #C51E3A; text-decoration: none;">Creating a React Application
                                Links to an
                                external site.
                                <i class="fa fa-external-link" style="color: #C51E3A;" aria-hidden="true"></i>
                            </a>

                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>



                        <li class="list-group-item list-group-item-secondary">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-sort-desc px-2" aria-hidden="true"></i>
                            Week 1 - HTML AND DOM
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-plus float-end" style="color: darkgray;;" aria-hidden="true"></i>
                            <i class="fa fa-sort-desc px-2 float-end" aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 10px;" aria-hidden="true"></i>
                            LEARNING OBJECTIVE

                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>

                            Learn how to create user interfaces with HTML
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>


                            Keep working on assignment 1
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>


                            Deploy the assignment to Netlify
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>


                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 10px;" aria-hidden="true"></i>

                            READING
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>
                            Full Stack Developer - Chapter 1 - Introduction
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>
                            Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>
                        </li>

                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 10px;" aria-hidden="true"></i>

                            SLIDES
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>

                            <i class="fa fa-link wd-profile-ext-link" style="color:  #C51E3A;"
                                aria-hidden="true"></i>
                            <a href="#" style="color:  #C51E3A; text-decoration: none;">Introduction to HTML and the
                                DOM
                                Links to an external site.
                                <i class="fa fa-external-link" style="color: #C51E3A;" aria-hidden="true"></i></a>
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>
                            <i class="fa fa-link wd-profile-ext-link" style="color:  #C51E3A;"
                                aria-hidden="true"></i>
                            <a href="#" style="color:  #C51E3A; text-decoration: none;">Creating an HTTP Server with
                                Node.js
                                Links to an external site.</a>
                            <i class="fa fa-external-link" style="color: #C51E3A;" aria-hidden="true"></i>
                            </a>
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>
                        <li class="list-group-item">

                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v" style="padding-right: 40px;" aria-hidden="true"></i>

                            <i class="fa fa-link wd-profile-ext-link" style="color:  #C51E3A;"
                                aria-hidden="true"></i>
                            <a href="#" style="color:  #C51E3A; text-decoration: none;">Creating a React Application
                                Links to an
                                external site.
                                <i class="fa fa-external-link" style="color: #C51E3A;" aria-hidden="true"></i></a>
                            <i class="fa fa-ellipsis-v float-end " style="padding-left: 10px;"
                                aria-hidden="true"></i>
                            <i class="fa fa-check-circle-o float-end" style="color: green;" aria-hidden="true"></i>

                        </li>

                    </ul>
                </div>

                <div class="d-none d-lg-block wd-course-home-last-col m-2">
                    <h5 style="color: #333333;">Course Status</h5>
                    <button type="button" class="btn btn-primary m-1 p-1"
                        style="color:  #333333;background-color:  azure; border:  #333333 solid 1px; ">
                        <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        Unpublish
                    </button>
                    <button type="button" class="btn btn-primary m-1 p-1"
                        style="background-color: green; border: green;">
                        <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                        Published
                    </button>

                    <ul class="list-unstyled mx-3">
                        <li>
                            <button type="button" class="btn btn-primary m-1 p-1"
                                style="color: #333333; background-color: azure; border: #E5E2E2 solid 1px;">
                                <i class="fa  fa-sign-in" aria-hidden="true"></i> Import Existing Content
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary m-1 p-1"
                                style="color: #333333; background-color: azure; border: #E5E2E2 solid 1px;">
                                <i class="fa fa-caret-square-o-right" aria-hidden="true"></i> Import from Commons
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary m-1 p-1"
                                style="color: #333333; background-color: azure; border: #E5E2E2 solid 1px;">
                                <i class="fa fa-gg-circle" aria-hidden="true"></i> Choose Home Page
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary m-1 p-1"
                                style="color: #333333; background-color: azure; border: #E5E2E2 solid 1px;">
                                <i class="fa fa-bar-chart" aria-hidden="true"></i> View Course Stream
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary m-1 p-1"
                                style="color: #333333; background-color: azure; border: #E5E2E2 solid 1px;">
                                <i class="fa fa-bullhorn" aria-hidden="true"></i> New Announcement
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary m-1 p-1"
                                style="color: #333333; background-color: azure; border: #E5E2E2 solid 1px;">
                                <i class="fa fa-bar-chart" aria-hidden="true"></i> New Analytics
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-primary m-1 p-1"
                                style="color: #333333; background-color: azure; border: #E5E2E2 solid 1px;">
                                <i class="fa fa-bell" aria-hidden="true"></i> View Course Notifications
                            </button>
                        </li>
                    </ul>

                    <div class="mx-3">
                        <h5 style="color: #333333; margin-bottom: 0%;">To Do</h5>
                        <hr style="margin: 0;">
                        <div style="font-size: 12px;margin-bottom: 0;">
                            <i class="fa fa-times float-end" aria-hidden="true"></i>
                            <p style="margin-bottom: 0; font-size: 12px; color: #C51E3A;">1. Grade A1 - ENV + HTML
                            </p>
                            <p style="color: #333333; padding-left: 10px;">100 points * Sep 18 ay 11:59pm</p>
                        </div>
                        <h5 style="color: #333333; margin-bottom: 0%;">Comming Up</h5>
                        <hr style="margin: 0;">

                        <div style="font-size: 12px;margin-bottom: 0;">


                            <p style="margin-bottom: 0; font-size: 12px; color: #C51E3A;">
                                <i class="fa fa-calendar" style="color: #333333; padding-right: 10px;"
                                    aria-hidden="true"></i>Lecture
                            </p>

                            <p style=" margin-bottom: 0; color: #333333; padding-left: 20px;">CS4550, 202410 </p>
                            <p style="margin-bottom: 0;color: #333333; padding-left: 20px;">Sep 7 at 11:45am</p>


                            <p style="margin-bottom: 0; font-size: 12px; color: #C51E3A;">
                                <i class="fa fa-calendar" style="color: #333333; padding-right: 10px;"
                                    aria-hidden="true"></i>CS5610 06 SP23 Lecture
                            </p>

                            <p style="margin-bottom: 0;color: #333333; padding-left: 20px;">CS4550, 202410 </p>
                            <p style="margin-bottom: 0;color: #333333; padding-left: 20px;">Sep 7 at 11:45am</p>


                            <p style="margin-bottom: 0; font-size: 12px; color: #C51E3A;">
                                <i class="fa fa-calendar" style="color: #333333; padding-right: 10px;"
                                    aria-hidden="true"></i>CS5610 Web Development Summer 1 2023 Lecture
                            </p>

                            <p style="margin-bottom: 0;color: #333333; padding-left: 20px;">CS4550, 202410 </p>
                            <p style="margin-bottom: 0;color: #333333; padding-left: 20px;">Sep 7 at 11:45am</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
}
