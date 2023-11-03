import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {FaEllipsisVertical} from "react-icons/fa6";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./moduleReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div>
        <div class="wd-flex-row-container">
            <div class="wd-flex-grow-1 d-none d-sm-block">
                    <hr />
                    <div class="d-flex float-end">
                        <button type="button" class="btn btn-light">Collapse All</button>
                        <button type="button" class="btn btn-light">View Progress</button>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <AiOutlineCheckCircle/>
                                Publish All
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-danger">Module</button>
                        <button type="button" class="btn btn-light">
                        <FaEllipsisVertical />
                        </button>
                    </div>
                    <br/>  <br/>  <br/>
                    <hr />
                    <div className="newModule">
                    <li className="list-group-item">
                                <input value={module.name}
                                onChange={(e)=> dispatch(setModule({ ...module, name: e.target.value }))
                                }
                                />
                                <br/>
                                <textarea value={module.description}
                                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))                            
                                }
                                />
                                <br/>
                                <button type="button" class="btn btn-danger" 
                                          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                                          Add</button>
                                <button 
                                type="button" class="btn btn-light"
                                onClick={() => dispatch(updateModule(module))}>
                                Update
                                </button>

                            </li></div>
                            <br/>
                    <ul class="list-group mb-5">
                        <li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center"> Readings
                            <span>
      <AiOutlineCheckCircle className="fa-check-circle" />
      <AiOutlinePlus/>
                                <FaEllipsisVertical />
                            </span>
                        </li>
                    </ul>
                    <ul class="list-group mb-5">
                        <li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center"> Required Textbooks
                            <span><AiOutlineCheckCircle className="fa-check-circle"/>
                            <AiOutlinePlus/>
                                <FaEllipsisVertical />
                            </span>
                        </li>
                    </ul>
                    {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                        <div>
                            <ul class="list-group mb-5">
                                <li class="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">Week {module.week} - {module.name}
                                <button
                                    type="button" class="btn btn-light"
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                    </button>

                                    <button
                                     type="button" class="btn btn-danger"
                                     onClick={() => dispatch(deleteModule(module._id))}>
                                     Delete
                                    </button>

                                    <span><AiOutlineCheckCircle className="fa-check-circle"/>
                                    <AiOutlinePlus/>
                                        <FaEllipsisVertical />
                                    </span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">LEARNING OBJECTIVES
                                    <span><AiOutlineCheckCircle className="fa-check-circle"/>
                                        <FaEllipsisVertical />
                                    </span>
                                </li>

                                <li class="list-group-item ps-5 d-flex justify-content-between align-items-center">{module.description}
                                        <span><AiOutlineCheckCircle className="fa-check-circle"/>
                                            <FaEllipsisVertical />
                                        </span>
                                    </li>
                            </ul>
                        </div>
                        
                    ))
                    }
                    
                    
            </div>
        </div>
        </div>   
                
  );
}
export default ModuleList;