# Grandomizer

Read the full [Scope](https://goo.gl/S81WXp). Or don't.

## Description

This is a tool for instructors and classroom leaders to randomly divide participants within a cohort (or class) into smaller groups. The instructor will be able to create groups by entering the desired number of members in a group, or by entering the desired total number of groups.

## Details and Flow

Now that the instruction phase of the curriculum is, for the most part, complete, it is far easier to immagine building a “full-stack” application. The Grandomizer will be a showcase for a majority of the technologies that have been imparted to us in the past few weeks. The idea for a group randomizer was not a novel one, but rather an assignment that most Prime students have attempted. As a large solo project, however, the idea of expanding on the original assignment and creating a “fancy” group randomizer from scratch should prove useful to the instructors at Prime.

This randomizer be be built from the ground-up without using any portion of the previous, smaller project, in order to have the advantage of a fresh thought-process. For convenience, login and registration will be enabled through 3rd party services, such as Google and Twitter, but the user can also use a username and password for either. Instructors will have the ability to save cohort members as a “cohort” in their profile. The input area to create a cohort will accept comma-separated lists of strings. Once saved to a new SQL table, the cohort can be sorted by desired number of groups or by the desired number of members in a group. In the event that a cohort cannot be evenly divided according to the user’s specification, one group will be smaller than the rest. Each generated group will be provided a group name as well as a group number for their reference. Clicking ‘generate’ again will clear the previous results and replace them with new combinations. 

1. The first thing a user sees will be the login/registration partial. Registration using a 3rd party may activate a secondary window to complete the registration/authentication process.

2. Upon successful login, a user icon appears in the page header to indicate a logged-in state. Also upon login, the group generator partial replaces the login/registration forms.

3. From the “saved cohorts” list or from the user icon in the top right, a user can link to the user profile/settings partial (which replaces the group generator partial). There, new cohorts can be saved.

4. Activate the group generator partial by clicking on the “Grandomizer” heading, or by a button link.

5. Generating a group with the “generate” button activates a group-display partial, replacing the group/criteria options. “Start over” returns the user to those options.

