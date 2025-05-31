pipeline{
    agent any
    tools {
        nodejs 'NodeJS-20'
    }
    stages {
    //Dependecies
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
                sh 'npm install -g jest'
                sh 'chmod -R 777 node_modules'
            }
        }

    //Build
        stage('Build'){
            steps{
                sh 'npm run build'
                sh 'ls -la dist/'
            }
        }
    //Execute TESTS
        stage('Ejectuar tests'){
            steps{
                sh 'npm test'
            }
        }
    //CD Pipeline
        stage('Trigger CD Pipeline'){
            when{
                branch 'main'
            }
            steps{
                build job: 'CD-Deploy-Production',
                    parameters: [
                        string(name: 'ARTIFACT_VERSION', value: "${env.BUILD_ID}")
                    ],
                    wait: false
                echo 'Pipeline CD disparado!'

            }
        }
    }
}