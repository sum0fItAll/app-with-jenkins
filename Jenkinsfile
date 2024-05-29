pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm  // This checks out the source code from the connected SCM (e.g., GitHub)
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                script {
                    dir('backend') {  // Assuming 'backend' is the directory name in your repo
                        docker.build("my-backend-app", ".")
                    }
                }
            }
        }
        stage('Run Backend Docker Container') {
            steps {
                script {
                    docker.image("my-backend-app").run("-d -p 5000:5000")
                }
            }
        }
        // stage('Build Frontend Docker Image') {
        //     steps {
        //         script {
        //             dir('frontend') {  // Assuming 'frontend' is the directory name in your repo
        //                 docker.build("my-frontend-app", ".")
        //             }
        //         }
        //     }
        // }
        // stage('Run Frontend Docker Container') {
        //     steps {
        //         script {
        //             docker.image("my-frontend-app").run("-d -p 3000:3000")
        //         }
        //     }
        // }
    }
}
