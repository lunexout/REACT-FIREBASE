import React, { useState,useEffect,useRef  } from 'react'
import db from './../../firebase'
import {useLocation} from 'react-router-dom'

const Teacher = (props) => {
    const [classes, setClasses] = useState([])

    // const location = useLocation();
    // const Subjects = []  
    useEffect(() => {
        console.log(1);
        // getSubjects()
    });

    const getSubjects = async () => {
        return await 
        db
        .collection('Teachers')
        .doc(sessionStorage.getItem('teacher'))
        .collection('Classes')
        .onSnapshot(doc => doc.docs.map(data => setClasses([...classes, data.data()] ) ))
    }
    const listOfSubjects = classes.map((item, key) =>
        <div className="row">
            <div className="col-xl-3">
                {item.class_id}
            </div>
        </div>
    )
    return(
        <>
            <div className="container">
                <button onClick={getSubjects}>load classes</button>
                {console.log(listOfSubjects)}
                {listOfSubjects}
            </div>
        </>
    );
}

export default Teacher;