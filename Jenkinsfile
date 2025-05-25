pipeline{
    agent any
    tools {
        nodejs 'NodeJS-20'
    }
    stages {
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
                sh 'npm install -g jest'
                sh 'chmod -R 777 node_modules'
            }
        }
        stage('Ejectuar tests'){
            steps{
                sh 'npm test'
            }
        }
    }
}