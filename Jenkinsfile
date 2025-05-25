pipeline{
    agent any
    tools {
        nodejs 'NodeJS-20'
    }
    stages {
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Ejectuar tests'){
            steps{
                sh 'npm test'
            }
        }
    }
}