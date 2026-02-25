const { test, expect } = require('@playwright/test');

test('Validate posts from JSONPlaceholder', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  expect(response.status()).toBe(200);
  // json stored
  const posts = await response.json();

  //it's an array of 100 posts
  expect(Array.isArray(posts)).toBe(true);
  expect(posts).toHaveLength(100);

  posts.forEach(post => {
    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');

    expect(typeof post.userId).toBe('number');
    expect(typeof post.id).toBe('number');
    expect(typeof post.title).toBe('string');
    expect(typeof post.body).toBe('string');
  });

  console.log('Fetched posts:', posts);
  console.log("================================================================");
});


test('Validate single post from JSONPlaceholder', async ({ request }) => {
  const Id = 1;
  const response = await request.get(`https://jsonplaceholder.typicode.com/posts/${Id}`);
  expect(response.status()).toBe(200);

  const post = await response.json();
  expect(post.id).toBe(Id);
  expect(post).toHaveProperty('userId');
  expect(post).toHaveProperty('title');
  expect(post).toHaveProperty('body');

  expect(typeof post.userId).toBe('number');
  expect(typeof post.title).toBe('string');
  expect(typeof post.body).toBe('string');
  console.log('Fetched post:', post);
  console.log("================================================================");
});


test('Create a post on JSONPlaceholder', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: { title: "foo", body: "bar", userId: 1 }
  });

  expect(response.status()).toBe(201);
  const post = await response.json();
  expect(post).toHaveProperty('id');
  expect(post.title).toBe("foo");
  expect(post.body).toBe("bar");
  expect(post.userId).toBe(1);

  console.log('Created post:', post);
  console.log("================================================================");
});


test('Update a post on JSONPlaceholder', async ({ request }) => {
  const updatedData = { title: "upd title", body: "upd body", userId: 1 };
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: updatedData
  });

  expect(response.status()).toBe(200);
  const post = await response.json();
  expect(post.title).toBe(updatedData.title);
  expect(post.body).toBe(updatedData.body);
  expect(post.userId).toBe(updatedData.userId);
  expect(post.id).toBe(1);

  console.log('Updated post:', post);
  console.log("================================================================");
});

test('Get invalid post returns 404', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/9999');
  expect(response.status()).toBe(404);
  const body = await response.text();
  expect(body).toBe('{}');
  console.log("================================================================");
});