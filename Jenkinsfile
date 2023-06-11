pipeline {
    agent {
        docker {
            image 'node:14' // Specify the Docker image you want to use for your build environment
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Mount the Docker socket for Docker-in-Docker support
        }
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerHub')
    }

    tools {
        nodejs "Nodejs"
    }

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/imadsaad12/Ecommerce_BE'

                sh 'npm install'

                script {
                    docker.withRegistry('', 'dockerHub') {
                        sh 'docker build -t ecommerce-backend .'
                    }
                }

                echo 'image built'
            }
        }

        stage('Push image') {
            steps {
                script {
                    docker.withRegistry('', 'dockerHub') {
                        sh 'docker push ecommerce-backend'
                    }
                }

                echo 'image pushed'
            }
        }

        // stage('Deploy'){
        //     steps{
        //         sh 'git pull origin master'
        //         sh 'heroku git:remote -a aquasafa'
        //         sh 'git push heroku HEAD:master'
        //     }
        // }
    }
}
