export const servicesData = [
  {
    id: "ec2",
    name: "Amazon EC2",
    icon: "💻",
    description: "Virtual servers in the cloud. Think of it as renting a computer in an AWS data center.",
    category: "Compute",
    useCases: [
      "Hosting custom web applications",
      "Running backend databases",
      "Processing large workloads that need full OS control"
    ],
    notUseCases: [
      "Hosting simple static websites (use S3)",
      "Running short-lived background tasks (use Lambda)"
    ],
    example: "A company needs a dedicated server to host a custom legacy application."
  },
  {
    id: "s3",
    name: "Amazon S3",
    icon: "🪣",
    description: "Object storage built to store and retrieve any amount of data from anywhere.",
    category: "Storage",
    useCases: [
      "Hosting static websites (HTML/CSS/JS)",
      "Storing user-uploaded images and documents",
      "Backups and archives"
    ],
    notUseCases: [
      "Running a database (use RDS/DynamoDB)",
      "Executing application code (use EC2/Lambda)"
    ],
    example: "Netflix uses S3 to store millions of movies and TV show video files."
  },
  {
    id: "iam",
    name: "AWS IAM",
    icon: "🔑",
    description: "Identity and Access Management. Securely control access to AWS services and resources.",
    category: "Security",
    useCases: [
      "Creating users and groups",
      "Granting permissions to AWS services",
      "Enforcing multi-factor authentication (MFA)"
    ],
    notUseCases: [
      "Managing customer logins for your own app (use Cognito)",
      "Storing application data"
    ],
    example: "Giving an employee access only to read from a specific S3 bucket, but not delete files."
  },
  {
    id: "vpc",
    name: "Amazon VPC",
    icon: "🌐",
    description: "Virtual Private Cloud. A logically isolated section of the AWS cloud where you launch resources.",
    category: "Networking",
    useCases: [
      "Securing backend servers from the internet",
      "Creating public and private subnets",
      "Setting up a VPN connection to your office"
    ],
    notUseCases: [
      "Deploying application code (VPC is just the network)",
      "Global content delivery (use CloudFront)"
    ],
    example: "A bank keeps its database in a private subnet within a VPC so it cannot be accessed directly from the internet."
  },
  {
    id: "cloudwatch",
    name: "Amazon CloudWatch",
    icon: "📈",
    description: "A monitoring and observability service. It provides data and actionable insights to monitor applications, respond to system-wide performance changes, and optimize resource utilization.",
    category: "Management",
    useCases: [
      "Monitoring EC2 server CPU usage",
      "Setting alarms for billing thresholds",
      "Collecting and tracking application logs"
    ],
    notUseCases: [
      "Securing the network (use VPC/Security Groups)",
      "Managing user identities (use IAM)"
    ],
    example: "A developer sets up a CloudWatch alarm to send an email when an EC2 instance's CPU utilization stays above 80% for more than 5 minutes."
  }
];
