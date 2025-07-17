pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-angular-app"
        CONTAINER_NAME = "angular-container"
        PORT = "8088"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'prod', url: 'https://github.com/edbertrhema/angular-ci-cd-example.git'
            }
        }

    stage('Install Dependencies') {
        steps {
            // Only install if node_modules doesn't exist
            script {
                if (!fileExists('node_modules')) {
                    sh 'npm install'
                } else {
                    echo "Using cached node_modules"
                }
            }
        }
    }

        stage('Build Angular App') {
            steps {
                sh 'npx ng build --configuration=production'
            }
        }        

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh """
                docker stop ${CONTAINER_NAME} || true
                docker rm ${CONTAINER_NAME} || true
                """
            }
        }

        stage('Run New Container') {
            steps {
                sh "docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }
}
