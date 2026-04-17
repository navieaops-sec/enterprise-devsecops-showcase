# 🚀 Java Maven Password Validator — DevSecOps Build Tools Showcase

This project is part of my **Enterprise DevSecOps Showcase Monorepo** and demonstrates how I built a **Maven-based Java application from scratch in VS Code**, following enterprise project structure and build-tool best practices.

---

# 📌 Project Goal

The goal of this project is to showcase:

* Maven build lifecycle understanding
* Standard Java project structure
* `pom.xml` dependency management
* Unit testing with JUnit 5
* Secure coding use case (password policy validation)
* Git + GitHub version control
* Interview-ready explanation for DevSecOps build tools module

---

# 📁 Final Project Structure

```text
java-maven-app
├── pom.xml
├── README.md
└── src
    ├── main
    │   └── java
    │       └── com
    │           └── navya
    │               └── devsecops
    │                   └── PasswordValidator.java
    └── test
        └── java
            └── com
                └── navya
                    └── devsecops
                        └── PasswordValidatorTest.java
```

---

# 📄 File-by-File Explanation

## 1) `pom.xml`

### 🎯 Purpose

This is the **heart of Maven project configuration**.

It defines:

* project identity
* Java version
* dependencies
* plugins
* build lifecycle metadata

### 💼 Interview Answer

**Q: What is `pom.xml`?**

**Answer:**

> `pom.xml` is the Project Object Model file in Maven. It defines project coordinates such as `groupId`, `artifactId`, and `version`, along with dependencies, plugins, and build lifecycle settings.

### 🔥 Key Concepts Covered

* Project coordinates
* Dependency resolution
* JUnit dependency
* Surefire plugin
* Compiler version

---

## 2) `PasswordValidator.java`

### 🎯 Purpose

This is the **main business logic class**.

It validates whether a password:

* is not null
* has at least 8 characters
* contains 1 uppercase letter
* contains 1 numeric digit

### 💼 Interview Answer

**Q: Why did you choose password validation?**

**Answer:**

> I selected password validation because it is a realistic DevSecOps-aligned secure coding use case. It demonstrates policy enforcement logic and unit testability.

### 💡 Logic Explained

```java
password.length() >= 8
```

➡ minimum length check

```java
password.matches(".*[A-Z].*")
```

➡ uppercase check

```java
password.matches(".*[0-9].*")
```

➡ numeric check

---

## 3) `PasswordValidatorTest.java`

### 🎯 Purpose

This file validates the application logic using **JUnit 5**.

### ✅ Test Cases Added

1. Strong password should pass
2. Weak password should fail

### 💼 Interview Answer

**Q: Why are tests under `src/test/java`?**

**Answer:**

> Maven follows convention-based project structure. `src/main/java` contains production code, while `src/test/java` is reserved for unit tests so Maven and JUnit can auto-discover test cases.

### 🎯 Concepts Covered

* Test lifecycle integration
* Positive and negative scenarios
* JUnit annotations
* Assertions

---

# ⚙️ Build Lifecycle I Practiced

## ✅ Compile

Compiled Java source into:

```text
target/classes
```

### 💼 Interview Answer

**Q: What happens in compile phase?**

**Answer:**

> The compile phase converts `.java` source files into `.class` bytecode files and stores them under `target/classes`.

---

## ✅ Test

Executed JUnit tests using VS Code Test Explorer.

### 💼 Interview Answer

**Q: What is test lifecycle phase?**

**Answer:**

> During the test phase, Maven executes unit tests from `src/test/java` using configured test frameworks like JUnit.

---

## ✅ Package Concept

Prepared the project to generate a deployable JAR artifact.

### 💼 Interview Answer

**Q: What happens in package phase?**

**Answer:**

> The package phase bundles compiled code into a distributable artifact such as a JAR file for deployment.

---

# 🛠️ VS Code + Setup Challenges I Solved

## Problems I Faced

* Maven CLI not recognized
* wrong `test/java` folder path
* no main method error
* JUnit imports red highlights
* Git repo not initialized

## How I Solved

* added proper `pom.xml`
* corrected to `src/test/java`
* added `main()` for execution validation
* refreshed Java language server
* initialized Git using `git init`

### 💼 Troubleshooting Interview Answer

> I debugged Maven project recognition issues by correcting standard folder conventions, fixing dependency configuration in `pom.xml`, and refreshing the Java language server workspace.

---

# 🌍 GitHub Showcase Talking Points

This project proves hands-on knowledge of:

* Git initialization
* source control
* Java build tools
* Maven structure
* secure business logic
* unit testing
* enterprise folder conventions

---

# 🎤 30-Second Interview Summary

> I built a Maven-based Java password validator service in VS Code using enterprise-standard structure. I configured `pom.xml` with JUnit dependencies, implemented secure password policy validation, added positive and negative test cases, validated compile and test lifecycle phases, and version-controlled the project in GitHub as part of my DevSecOps build tools showcase.

---
