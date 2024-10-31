pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
        PATH = "$PATH:/var/jenkins_home/workspace/ats/node_modules/.bin"  // Add this line
    }
    stages {
        stage('Build') {
            steps {
                sh '''
                    # Install pnpm globally
                    npm install -g pnpm
                    
                    # Install dependencies
                    pnpm install
                '''
            }
        }
        stage('Deliver') {
            steps {
                sh '''
                    # Build the application
                    pnpm run build
                    
                    # Start the application
                    pnpm run dev &
                    sleep 10  # Wait for app to start
                '''
                
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                
                sh '''
                    # Kill the application
                    pkill -f 'node'
                '''
            }
        }
    }
}