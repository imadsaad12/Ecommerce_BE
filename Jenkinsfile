pipeline {
    agent any

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
                sh 'docker build -t ecommerce-backend .'
                echo 'image built'
            }
        }

        stage('Push image') {
            steps {
             
                sh 'docker push ecommerce-backend'

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
