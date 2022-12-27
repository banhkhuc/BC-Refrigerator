import Banner from 'app/components/Banner';
import NewMovieList from 'app/components/NewMovieList';
import UpcomingMovieList from 'app/components/UpcomingMovieList';
import { useEffect } from 'react';

export function HomePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div>
      <Banner />
      <NewMovieList />
      <UpcomingMovieList />
    </div>
  );
}
