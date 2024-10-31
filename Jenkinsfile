pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:8080'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh './jenkins/scripts/install-pnpm.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                // sh './jenkins/scripts/kill.sh'
            }
        }
    }
}