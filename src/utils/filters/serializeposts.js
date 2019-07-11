module.exports = function(value) {
    const postData = value.map((post) => {
    return {
      date: post.date,
      url: post.url,
      data: {
        title: post.data.title,
        nav:post.data.menuorder
      },
    };
  });

  return JSON.stringify({
    collections: {
      post: postData,
    },
  }, null, 2);
}