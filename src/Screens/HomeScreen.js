import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Navbar from "../Navbar";
import Row from "../Row";
import request from "../Request";

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
