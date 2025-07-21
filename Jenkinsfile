pipeline {
    agent any

    //variable
    environment {
        IMAGE_NAME = "my-angular-app"
        CONTAINER_NAME = "angular-container"
        PORT = "8088"
        DOCKERHUB_USER = "edbertrhema" // Change this!
        TAG = "latest"
    }

    //clone repo from the github in dev branch
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'dev', url: 'https://github.com/edbertrhema/angular-ci-cd-example.git'
            }
        }


    // stage('Install Dependencies') {
    //     steps {
    //         // Only install if node_modules doesn't exist
    //         script {
    //             if (!fileExists('node_modules')) {
    //                 sh 'npm install'
    //             } else {
    //                 echo "Using cached node_modules"
    //             }
    //         }
    //     }
    // }

    //     stage('Build Angular App') {
    //         steps {
    //             sh 'npx ng build --configuration=production'
    //         }
    //     }        

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${TAG} ."
                sh "docker tag ${IMAGE_NAME}:${TAG} ${DOCKERHUB_USER}/${IMAGE_NAME}:${TAG}"
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

        stage('Docker Hub Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh "docker push ${DOCKERHUB_USER}/${IMAGE_NAME}:${TAG}"
            }
        }

        stage('Run New Container') {
            steps {
                sh "docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${DOCKERHUB_USER}/${IMAGE_NAME}:${TAG}"
            }
        }
    }
}
