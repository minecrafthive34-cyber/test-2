# AI Math Solver

An AI-powered math problem solver that identifies problems as solved or unsolved, provides step-by-step solutions or detailed explanations, and offers an interactive AI chat for further assistance.

This application is built with React, TypeScript, and Tailwind CSS, and powered by the Google Gemini API.

## Features

-   Solve math problems from text or image input.
-   Get detailed, step-by-step solutions.
-   Advanced analysis including difficulty, key concepts, and classification.
-   Interactive AI Math Tutor for follow-up questions.
-   Problem history.
-   Shareable solutions (via link for text problems, or image download).
-   Multi-language support (English & Arabic).

## Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    cd YOUR_REPOSITORY
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your API Key:**
    Create a `.env` file in the root of the project and add your Google Gemini API key:
    ```
    API_KEY=YOUR_GEMINI_API_KEY
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Deployment

This project is configured for continuous deployment to GitHub Pages using GitHub Actions.

### Configuration

1.  **Repository Name:** Before deploying, you must update the `base` property in `vite.config.ts` to match your GitHub repository name. For example, if your repository URL is `https://github.com/john-doe/math-solver`, the `base` should be `'/math-solver/'`.

2.  **API Key Secret:** For the deployment to work, you need to add your Gemini API key as a repository secret in GitHub.
    - Go to your repository's **Settings** > **Secrets and variables** > **Actions**.
    - Click **New repository secret**.
    - Name the secret `GEMINI_API_KEY`.
    - Paste your API key as the value.

Once configured, any push to the `main` branch will automatically trigger a build and deployment. You can also trigger it manually from the Actions tab in your repository.
