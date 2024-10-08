docker-start:
	docker-compose -f docker-compose.yml up 
docker-build:
	docker-compose up --build --remove-orphans --force-recreate
docker-stop:
	docker-compose stop
docker-test:
	docker-compose exec boillerplate npm run test
docker-down:
	docker-compose down