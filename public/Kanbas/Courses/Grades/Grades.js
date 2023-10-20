import KanbasNavigation from '../../KanbasNavigation/kanbasNavigation.js'
import CourseNavigation from '../CoursesNavigation/CourseNavigation.js'

export default function Grades(){
    return `<div class="wd-flex-row-container ">

    <div class="wd-bg-color-black">
       ${KanbasNavigation("Courses")}
    </div>


    <div style="width: 100%;">
        <div class="row">
            <div class="col">
                <nav style="--bs-breadcrumb-divider:  '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb wd-course-header" style="padding-top: 10px; padding-left: 10px; ">
                        <i class="fa fa-bars" style="color: #C51E3A;padding-right: 20px; font-size: 25px;"
                            aria-hidden="true"></i>
                        <li class="breadcrumb-item">CS5610 Web Programming</li>
                        <li class="breadcrumb-item">Fall 2023</li>
                        <li class="breadcrumb-item">Section 2</li>
                        <li class="breadcrumb-item active" aria-current="page"><a href="#">Grades</a></li>
                    </ol>
                </nav>
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary float-end m-1 p-2"
                    style="color:  #333333;background-color:  azure; border:  #333333 solid 1px; ">
                    <i class="fa fa-eye-slash" aria-hidden="true"></i>
                    Student Veiw</button>
            </div>
        </div>
        <hr>




        <div class="wd-flex-row-container">
            <div class="wd-course-nav-home">
      ${CourseNavigation("Grades")}
            </div>

            <div class="wd-flex-row-container">

                <div style="width: 800px;">
                    <div class="mb-5">
                        <button type="button" class="btn btn-outline-secondary float-end m-1 p-1"> <i class="fa fa-cog "
                                aria-hidden="true"></i></button>


                        <div class="btn-group float-end m-1">
                            <button type="button" class="btn btn-outline-secondary p-1 dropdown-toggle"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-upload" aria-hidden="true"></i>
                                Export
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Option 1</a></li>
                                <li><a class="dropdown-item" href="#">Option 2</a></li>
                                <li><a class="dropdown-item" href="#">Option 3</a></li>
                            </ul>
                        </div>


                        <button type="button" class="btn btn-outline-secondary float-end m-1 p-1">
                            <i class="fa fa-download" aria-hidden="true"></i>

                            Import
                        </button>

                    </div>



                    <div class="py-4 row">
                        <div class="col">
                            <div class="form-group">
                                <label for="student-names">Student Names</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fa fa-search"
                                            aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" id="student-names"
                                        aria-label="Search Assignment" placeholder="Search Students">
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="form-group">
                                <label for="student-names">Assignment Names</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fa fa-search"
                                            aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" id="student-names"
                                        aria-label="Search Assignment" placeholder="Search Assignments">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-outline-secondary  m-1 p-1"> <i class="fa fa-filter "
                            aria-hidden="true"></i> Apply Filters</button>

                    <hr class="my-4" />
                    <table class="table-bordered">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>A1 - HTML</th>
                                <th>A2 - CSS</th>
                                <th>A3 - JS</th>
                                <th>A4 - PHP</th>
                                <th>A5 - React</th>
                                <th>A6 - SQL</th>
                                <th>A7 - Node</th>
                                <th>A8 - Express</th>
                                <th>A9 - Mongo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <tr>
                                    <td style="color: #C51E3A;">Alice Wonderland</td>
                                    <td contenteditable="true">98</td>
                                    <td contenteditable="true">78</td>
                                    <td contenteditable="true">71</td>
                                    <td contenteditable="true">90</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                                </tr>
                            </tr>
                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 1</td>
                                <td contenteditable="true">98</td>
                                <td contenteditable="true">78</td>
                                <td contenteditable="true">71</td>
                                <td contenteditable="true">90</td>
                                <td contenteditable="true">100</td>
                                <td contenteditable="true">100</td>
                                <td contenteditable="true"></td>
                                <td contenteditable="true"></td>
                                <td contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 2</td>
                                <td contenteditable="true">98</td>
                                    <td contenteditable="true">78</td>
                                    <td contenteditable="true">71</td>
                                    <td contenteditable="true">90</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 3</td>
                                <td contenteditable="true">98</td>
                                    <td contenteditable="true">78</td>
                                    <td contenteditable="true">71</td>
                                    <td contenteditable="true">90</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 4</td>
                                <td contenteditable="true">98</td>
                                    <td contenteditable="true">78</td>
                                    <td contenteditable="true">71</td>
                                    <td contenteditable="true">90</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 5</td>
                                <td contenteditable="true">98</td>
                                    <td contenteditable="true">78</td>
                                    <td contenteditable="true">71</td>
                                    <td contenteditable="true">90</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 6</td>
                                <td contenteditable="true">98</td>
                                    <td contenteditable="true">78</td>
                                    <td contenteditable="true">71</td>
                                    <td contenteditable="true">90</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 7</td>
                                <td contenteditable="true">98</td>
                                    <td contenteditable="true">78</td>
                                    <td contenteditable="true">71</td>
                                    <td contenteditable="true">90</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 8</td>
                                <td contenteditable="true">98</td>
                                <td contenteditable="true">78</td>
                                <td contenteditable="true">71</td>
                                <td contenteditable="true">90</td>
                                <td contenteditable="true">100</td>
                                <td contenteditable="true">100</td>
                                <td contenteditable="true"></td>
                                <td contenteditable="true"></td>
                                <td contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 9</td>
                                <td contenteditable="true">98</td>
                                    <td contenteditable="true">78</td>
                                    <td contenteditable="true">71</td>
                                    <td contenteditable="true">90</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true">100</td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                                    <td contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 10</td>
                                <td>98</td>
                                <td>76</td>
                                <td>71</td>
                                <td>90</td>
                                <td>100</td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td style="color: #C51E3A;">Alice Wonderland 11</td>
                                <td>98</td>
                                <td>76</td>
                                <td>71</td>
                                <td>90</td>
                                <td>100</td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>`
}