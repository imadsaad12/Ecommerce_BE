pipeline {
    agent {
        docker {
            image 'docker:latest'
        }
    }
    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerHub')
	}
    tools { nodejs "Nodejs" }
    stages {
        stage('Build') {
            steps {
                // Clone your repository
                git 'https://github.com/imadsaad12/Ecommerce_BE'
                
                sh 'npm install'
               
                sh 'docker build -t ecommerce-backend .'
                 
                echo 'image built'
            }
        }
        
        stage('Push image') {
            steps {
                // sh 'docker login -u isdocker12 -p Zs~LD_y99c%pB?g isdocker12/ecommerce '
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                sh 'docker push ecommerce-backend'
                echo 'image pushed'
            }
        }
        // stage('Deploy'){
        //     steps{
        //         sh 'git pull origin master'
		// 		sh 'heroku git:remote -a aquasafa'
		// 		sh 'git push heroku HEAD:master'
        //     }
        // }
    }
}
