# News Network

## Overview

News Network is a web application that provides a curated collection of daily news articles from various categories, including Business, Entertainment, General, Health, Science, Sports, and Technology. Stay informed and up-to-date with the latest news in your areas of interest.

## Video Demo

Check out our video demo on YouTube to see News Network in action:

https://github.com/yashpatel08/News-Network/assets/94280370/4fd76cba-284d-4e62-897a-c5cbe9b8539c

## Features

- **Category-wise News:** Browse news articles categorized into Business, Entertainment, General, Health, Science, Sports, and Technology.

- **Daily Updates:** Get the latest news delivered to you every day, ensuring that you stay informed about the current events in your preferred categories.

- **Search Functionality:** Easily search for specific news articles, topics, or keywords to find information relevant to your interests.

- **Responsive Design:** Enjoy a seamless browsing experience on various devices, including desktops, tablets, and mobile phones.

## News API Key

To use News Network, you will need to obtain a free API key from [News API](https://newsapi.org/). Follow these steps:

1. Visit [News API](https://newsapi.org/) and sign up for a free account.

2. After signing up, you will receive an API key. Keep this key secure.

3. Copy your API key.

4. In the News Network project, locate the file named `.env.example` and rename it to `.env`.

5. Open the `.env` file and replace `YOUR_NEWS_API_KEY` with the API key you obtained.

   ```dotenv
   REACT_APP_NEWS_API_KEY=your-api-key-here


# Installation

1. Clone the repository:
   ```bash
   $ git clone https://github.com/your-username/news-network.git
   ```

2. Navigate to the project directory:
  ```bash
   $ cd news-network
  ```

3. Install dependencies:
  ```bash
   $ npm install
  ```

4. Create a copy of the .env.example file and name it .env:
  ```bash
   $ cp .env.example .env
  ```

5. Open the .env file and replace YOUR_NEWS_API_KEY with the API key you obtained from News API:
  ```bash
  $ nano .env
  ```

In the editor, replace YOUR_NEWS_API_KEY with your actual API key, then save and exit.

6. Save the changes.

7. Start the application:
  ```bash
  $ npm start
  ```

8. Open your browser and visit http://localhost:3000 to access the News Network application.


 # Usage
- Upon accessing the application, you will be greeted with a homepage displaying the latest news articles from different categories.

- Use the navigation bar to explore news articles based on specific categories.

- Click on individual articles to view more details and read the full content.

- Use the search functionality to find news articles related to specific topics or keywords.

# Technologies Used
- React.js: Front-end library for building user interfaces.
