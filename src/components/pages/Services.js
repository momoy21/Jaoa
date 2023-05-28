import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Services.css";
import "../../App.css";
import { TravelPlanContext } from "../context";
import WeatherForecast from "./weather";
import { Link } from 'react-router-dom';

function Services() {
  const { todos, addTodo: contextAddTodo, removeTodo: contextRemoveTodo } = useContext(TravelPlanContext);
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(new Date());
  const [place, setPlace] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [regency, setRegency] = useState("");

  useEffect(() => {
    fetch("http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => response.json())
      .then((data) => {
        setProvinces(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (place) {
      fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${place}.json`)
        .then((response) => response.json())
        .then((data) => {
          setRegencies(data);
          // Check if the selected regency is available in the newly fetched data
          const selectedRegency = data.find((r) => r.id === regency);
          if (!selectedRegency) {
            setRegency(""); // Reset regency if not available in the new data
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [place]);

  const addTodo = (event) => {
    event.preventDefault();
    if (todo.trim() !== "" && place.trim() !== "" && regency.trim() !== "") {
      const newTodo = {
        name: todo,
        date: date.toLocaleDateString("en-GB"),
        place: place,
        regency: regency
      };
      contextAddTodo(newTodo);
      setTodo("");
      setDate(new Date());
      setPlace("");
      setRegency("");
    }
  };

  const removeTodo = (index) => {
    contextRemoveTodo(index);
  };

  return (
    <div className="Travels">
      <div className="Services">
        <h1>Travel Plan</h1>
        <div className="weather-container">
        <WeatherForecast />
        </div>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            placeholder="Nama Tempat Wisata"
          />
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Tanggal Travel"
          />
          <select
            value={place}
            onChange={(event) => setPlace(event.target.value)}
            className="provinsiBox"
          >
            <option value="" disabled>
              Pilih Provinsi Wisata
            </option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
          <select
            value={regency}
            onChange={(event) => setRegency(event.target.value)}
            className="regensiBox"
          >
            <option value="" disabled>
              Pilih Kota/Kabupaten Wisata
            </option>
            {regencies.map((regency) => (
              <option key={regency.id} value={regency.id}>
                {regency.name}
              </option>
            ))}
          </select>
          <button type="submit" disabled={!todo.trim() || !place.trim() || !regency.trim()}>
            Tambahkan
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} onClick={() => removeTodo(index)}>
              <div>Nama Wisata&nbsp;: {todo.name}</div>
              <div>Tanggal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {todo.date}</div>
              <div>Provinsi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {provinces.find((province) => province.id === todo.place)?.name}</div>
              <div>Kota&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {regencies.find((regency) => regency.id === todo.regency)?.name}</div>
            </li>
          ))}
        </ul>
        <footer className='travelinformation'>
          <div className='footers'>
            <small className='website-rights'>Jaoa © 2023</small>
            <div className='social-icons'>
              <Link
                className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i className='fab fa-facebook-f' />
              </Link>
              <Link
                className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Services;
