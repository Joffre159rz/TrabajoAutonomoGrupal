const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  }
  
  if (process.env.NODE_ENV === 'test') {
    config.MONGODB_URI = process.env.MONGODB_URI
  }
  
  export default config;
  
