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
                steps{
                    build job: 'CD-Deploy-Production', wait: false
                    echo 'CI completado - CD Iniciadio!'
                }

            }
        }
    }
}


//sdsdsdasdasdasdasd