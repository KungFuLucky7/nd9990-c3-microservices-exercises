# Screenshots
To help review your infrastructure, please include the following screenshots in this directory::

## Deployment Pipeline
* DockerHub showing containers that you have pushed
* GitHub repository’s settings showing your Travis webhook (can be found in Settings - Webhook)
* Travis CI showing a successful build and deploy job

## Kubernetes
* To verify Kubernetes pods are deployed properly
```bash
kubectl get pods
```
* To verify Kubernetes services are properly set up
```bash
kubectl describe services
```
* To verify that you have horizontal scaling set against CPU usage
```bash
kubectl describe hpa
```
* To verify that you have set up logging with a backend application
```bash
kubectl logs {pod_name}
```


> kubectl get svc
NAME            TYPE           CLUSTER-IP      EXTERNAL-IP                                                               PORT(S)        AGE
api-feed        ClusterIP      10.100.15.70    <none>                                                                    8080/TCP       19h
api-user        ClusterIP      10.100.222.69   <none>                                                                    8080/TCP       19h
frontend        ClusterIP      10.100.23.91    <none>                                                                    8100/TCP       19h
kubernetes      ClusterIP      10.100.0.1      <none>                                                                    443/TCP        24h
reverse-proxy   LoadBalancer   10.100.73.205   aaff6725281224a668195ce5e1ee2918-1817678960.us-east-1.elb.amazonaws.com   80:30636/TCP   19h


AWS Load Balancer Endpoint:
aaff6725281224a668195ce5e1ee2918-1817678960.us-east-1.elb.amazonaws.com

Frontend:
http://aaff6725281224a668195ce5e1ee2918-1817678960.us-east-1.elb.amazonaws.com/home

API:
curl http://aaff6725281224a668195ce5e1ee2918-1817678960.us-east-1.elb.amazonaws.com/api/v0/feed
curl http://aaff6725281224a668195ce5e1ee2918-1817678960.us-east-1.elb.amazonaws.com/api/v0/users/tom@gmail.com
