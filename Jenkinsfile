pipeline {
    agent any
    // environment {
	// 	DOCKERHUB_CREDENTIALS=credentials('dockerHub')
	// }
    stages {
        stage('Build') {
            steps {
                // Clone your repository
                git 'https://github.com/imadsaad12/Ecommerce_BE'
                
                sh 'npm install'
                sh 'npm run build'
                
                // Build the Docker image
                sh 'docker build -t ecommerce-backend .'
                echo 'image built'
            }
        }
        
        stage('Push') {
            steps {
                // Log in to your Docker registry
                sh 'docker login -u isdocker12 -p  Zs~LD_y99c%pB?g isdocker12/ecommerce '
                
                // Push the Docker image to the registry
                sh 'docker push ecommerce-backend'
                echo 'image pushed'
            }
        }
    }
}
