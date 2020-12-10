/**
 * The Effect Hook
Separate Hooks for Separate Effects

In older versions of React, many of the features that we use Hooks to support would have been handled by lifecycle methods in class components. While much of the functionality to end-users is the same, Hooks allow us to build these features with the simplicity of function components. When managing state logic with lifecycle methods, unrelated code often gets tangled up in the same lifecycle methods. Hooks gives us much more flexibility to organize our code how we like so that it can be simple, error-free, reusable, and testable!

When multiple values are closely related and change at the same time, it can make sense to group these values in a collection like an object or array. Packaging data together can also add complexity to the code responsible for managing that data. So it is a good idea to separate concerns by managing different data with different Hooks.

Compare the complexity here, where data is bundled up into a single object:

const [data, setData] = useState({ position: { x: 0, y: 0 } });
useEffect(() => {
  get('/menu').then((response) => {
    setData((prev) => ({ ...prev, menuItems: response.data }));
  });
  const handleMove = (event) =>
    setData((prev) => ({
      ...prev,
      position: { x: event.clientX, y: event.clientY }
    }));
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);

To the simplicity here, where we have separated concerns:

const [menuItems, setMenuItems] = useState(null);
useEffect(() => {
  get('/menu').then((response) => setMenuItems(response.data));
}, []);
 
const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  const handleMove = (event) =>
    setPosition({ x: event.clientX, y: event.clientY });
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);

It is not always obvious whether to bundle data together or separate it, but with practice, we get better at organizing our code so that it is easier to understand, add to, reuse, and test!

 */

///////////////////////before //////////////////////////////
/*
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
  const [data, setData] = useState(null);


  useEffect(() => {
    Promise.all([get('/menu'), get('/news-feed'), get('/friends')]).then(
      ([menuResponse, newsFeedResponse, friendsResponse]) => {
        setData({
          menu: menuResponse.data,
          newsFeed: newsFeedResponse.data,
          friends: friendsResponse.data
        });
      }
    );
  }, []);

  return (
    <div className='App'>
      <h1>My Network</h1>
      {!data || !data.menu ? <p>Loading..</p> : (
        <nav>
          {data.menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!data || !data.newsFeed ? <p>Loading..</p> : (
          <section>
            {data.newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!data || !data.friends ? <p>Loading..</p> : (
          <aside>
            <ul>
              {data.friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
*/
/////////////////////////////after/////////////////////////////
import React, { useState, useEffect } from "react";
import { get } from "./mockBackend/fetch";

export default function SocialNetwork() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    get("/menu").then((response) => {
      setMenu(response.data);
    });
  }, []);

  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get("/news-feed").then((response) => {
      setNewsFeed(response.data);
    });
  }, []);

  const [friends, setFriends] = useState(null);
  useEffect(() => {
    get("/friends").then((response) => {
      setFriends(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>My Network</h1>
      {!menu ? (
        <p>Loading..</p>
      ) : (
        <nav>
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className="content">
        {!newsFeed ? (
          <p>Loading..</p>
        ) : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt="" />
              </article>
            ))}
          </section>
        )}
        {!friends ? (
          <p>Loading..</p>
        ) : (
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? "online" : "offline"}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
