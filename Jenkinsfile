pipline {
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
                sh 'docker build -f docker/dockerfile.dev -t $DOCKER_IMAGE:latest'
            }
        }

        stage("Login to Docker Hub") {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR ==password-stdin'
            }
        }

        stage("Push Image") {
            steps {
                sh 'docker push $DOCKER_IMAGE:latest'
            }
        }
    }

}