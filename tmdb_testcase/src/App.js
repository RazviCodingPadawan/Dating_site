import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PopularMoviesList from './pages/PopularMoviesList'
import TopRatedMoviesList from './pages/TopRatedMoviesList';
import MovieDetails from './components/MovieDetails';
import MovieDetailsTopRated from './components/MovieDetailsTopRated';



function App() {

  return (
    <div className="flex flex-col w-full items-center justify-cener">
      <Header />
      <Footer />
      
      <Routes>
        <Route path='/' element={<PopularMoviesList/>} />
        <Route path='/toprated' element={<TopRatedMoviesList />} />
        <Route path='movies/:id' element={<MovieDetails />} />
        <Route path='movies-top/:id' element={<MovieDetailsTopRated />} />
      </Routes>
     
    </div>
  );
}

export default App;
