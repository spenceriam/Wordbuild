# AI Agent Rules for Wordbuild Development

This document outlines the guidelines and operational rules for AI agents assisting with the Wordbuild project. These rules are designed to ensure consistent, high-quality code generation and support throughout the development process.

## 1. Code Generation Rules

### 1.1 Code Structure and Style
- Generate clean, well-organized code with consistent indentation
- Follow JavaScript/TypeScript best practices and modern ES6+ syntax
- Use descriptive variable and function names
- Include appropriate JSDoc comments for functions and classes
- Follow the existing project architecture patterns
- Maintain separation of concerns (game logic, UI, data)
- Use functional programming principles where appropriate

### 1.2 Phaser.js Specific Guidance
- Follow Phaser 3's scene-based architecture
- Properly implement lifecycle methods (preload, create, update)
- Use appropriate Phaser components (Sprite, Physics, Input, etc.)
- Structure game objects according to Phaser best practices
- Optimize rendering and update cycles for performance
- Use appropriate scale managers for responsive design

### 1.3 Error Handling
- Implement robust error handling with try/catch where appropriate
- Provide fallbacks for critical functionality
- Log errors in a way that aids debugging
- Handle edge cases explicitly
- Validate inputs for functions and methods

## 2. Documentation Rules

### 2.1 Code Documentation
- Include header comments for all files explaining purpose
- Document all functions with JSDoc format
- Explain complex algorithms or unusual implementations
- Document any workarounds or temporary solutions
- Include references to relevant resources or inspirations

### 2.2 Commit Messages
- Write clear, descriptive commit messages
- Follow conventional commits format (feat:, fix:, docs:, etc.)
- Reference issue numbers when applicable
- Separate subject from body with a blank line
- Keep subject line under 50 characters
- Wrap body text at 72 characters

## 3. Project Management Rules

### 3.1 Issue Handling
- Analyze issues thoroughly before suggesting solutions
- Break down complex problems into manageable components
- Suggest pragmatic solutions with consideration for timeline constraints
- When providing multiple approaches, highlight tradeoffs clearly
- Update issue status based on progress

### 3.2 Development Workflow
- Prioritize tasks according to the MVP roadmap
- Focus on core functionality before implementing nice-to-have features
- Identify dependencies between tasks
- Flag potential blockers or risks early
- Suggest testing approaches for implemented features

## 4. Architectural Guidelines

### 4.1 Code Organization
- Structure code in modular, reusable components
- Properly separate concerns (game state, rendering, input, etc.)
- Use appropriate design patterns for game development
- Maintain clear interfaces between components
- Make the codebase extensible for post-MVP features

### 4.2 Performance Considerations
- Optimize rendering cycles and update loops
- Implement object pooling for frequently created/destroyed objects
- Minimize DOM manipulations and reflows
- Use appropriate data structures for efficient operations
- Consider mobile performance limitations

## 5. Testing and Quality Assurance

### 5.1 Testing Approach
- Suggest test scenarios for critical functionality
- Consider edge cases and failure modes
- Provide input validation and error checking
- Consider cross-browser and cross-device compatibility
- Test performance under different conditions

### 5.2 Code Review Guidance
- Highlight potential issues or improvements
- Check for common web game pitfalls
- Verify implementation against requirements
- Suggest optimizations where appropriate
- Ensure code adheres to project standards

## 6. AI Interaction Guidelines

### 6.1 Communication Style
- Provide clear, concise explanations
- Explain technical concepts at an appropriate level
- Ask clarifying questions when requirements are ambiguous
- Offer multiple approaches for complex problems
- Highlight assumptions made during implementation

### 6.2 Learning and Improvement
- Adapt to project-specific conventions and patterns
- Remember previous design decisions and apply consistently
- Recognize recurring issues and suggest systematic solutions
- Incorporate feedback into future code generation
- Suggest improvements to development processes

## 7. Game-Specific Considerations

### 7.1 Game Design Principles
- Focus on core gameplay loop engagement
- Prioritize responsiveness and tight controls
- Ensure visual feedback for all player actions
- Maintain appropriate difficulty curve
- Consider accessibility in control schemes

### 7.2 Mobile Optimization
- Design touch-friendly interfaces
- Optimize for various screen sizes
- Consider performance limitations of mobile devices
- Test touch input latency and responsiveness
- Implement appropriate mobile-specific features

## 8. Security and Best Practices

### 8.1 Web Security
- Follow web security best practices
- Sanitize user inputs
- Implement secure storage for user data
- Use HTTPS for any external communications
- Follow proper authentication patterns if implemented

### 8.2 Data Management
- Handle user data according to privacy best practices
- Implement appropriate local storage patterns
- Consider data persistence needs
- Optimize data structures for game performance
- Implement proper save/load mechanisms

## 9. Accessibility and Inclusion

### 9.1 Accessibility Guidelines
- Consider color contrast for text readability
- Provide alternative control schemes where possible
- Include options for adjusting game speed
- Support screen readers for menu navigation
- Avoid reliance solely on color for critical information

### 9.2 Inclusive Design
- Use inclusive language in game content
- Design difficulty options to accommodate various skill levels
- Consider color blindness in visual design
- Implement pause functionality for interruptions
- Provide clear feedback for player actions

## 10. Ongoing Development Support

### 10.1 Maintenance Recommendations
- Suggest refactoring opportunities for technical debt
- Identify potential scalability issues
- Recommend performance optimizations
- Document complex systems for future maintenance
- Structure code to facilitate future extensions

### 10.2 Feature Prioritization
- Focus on MVP requirements first
- Suggest high-impact features for post-MVP development
- Identify low-effort, high-value improvements
- Consider user feedback in feature recommendations
- Balance technical considerations with user experience
