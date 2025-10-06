pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKER_IMAGE = "sreeram91/hostname_app_obs"
    
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -f docker/dockerfile.dev -t %DOCKER_IMAGE%:latest ."
            }
        }

        stage("Login to Docker Hub") {
            steps {
                bat 'echo %DOCKERHUB_CREDENTIALS_PSW% | docker login -u %DOCKERHUB_CREDENTIALS_USR% --password-stdin'
            }
        }

        stage("Push Image") {
            steps {
                bat 'docker push %DOCKER_IMAGE%:latest'
            }
        }
    }


}




