!(function (e, i) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = i())
        : "function" == typeof define && define.amd
        ? define("NetlifyCmsLocales", [], i)
        : "object" == typeof exports
        ? (exports.NetlifyCmsLocales = i())
        : (e.NetlifyCmsLocales = i());
})(window, function () {
    return (function (e) {
        var i = {};
        function n(a) {
            if (i[a]) return i[a].exports;
            var t = (i[a] = { i: a, l: !1, exports: {} });
            return e[a].call(t.exports, t, t.exports, n), (t.l = !0), t.exports;
        }
        return (
            (n.m = e),
            (n.c = i),
            (n.d = function (e, i, a) {
                n.o(e, i) || Object.defineProperty(e, i, { enumerable: !0, get: a });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, i) {
                if ((1 & i && (e = n(e)), 8 & i)) return e;
                if (4 & i && "object" == typeof e && e && e.__esModule) return e;
                var a = Object.create(null);
                if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & i && "string" != typeof e))
                    for (var t in e)
                        n.d(
                            a,
                            t,
                            function (i) {
                                return e[i];
                            }.bind(null, t)
                        );
                return a;
            }),
            (n.n = function (e) {
                var i =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(i, "a", i), i;
            }),
            (n.o = function (e, i) {
                return Object.prototype.hasOwnProperty.call(e, i);
            }),
            (n.p = ""),
            n((n.s = 0))
        );
    })([
        function (e, i, n) {
            "use strict";
            n.r(i),
                n.d(i, "en", function () {
                    return r;
                }),
                n.d(i, "id", function () {
                    return p;
                });
            var r = {
                auth: {
                    login: "Login",
                    loggingIn: "Logging in...",
                    loginWithNetlifyIdentity: "Login with Netlify Identity",
                    loginWithAzure: "Login with Azure",
                    loginWithBitbucket: "Login with Bitbucket",
                    loginWithGitHub: "Login with GitHub",
                    loginWithGitLab: "Login with GitLab",
                    errors: {
                        email: "Make sure to enter your email.",
                        password: "Please enter your password.",
                        identitySettings: "Unable to access identity settings. When using git-gateway backend make sure to enable Identity service and Git Gateway.",
                    },
                },
                app: {
                    header: { content: "Contents", workflow: "Workflow", media: "Media", quickAdd: "Quick add" },
                    app: {
                        errorHeader: "Error loading the CMS configuration",
                        configErrors: "Config Errors",
                        checkConfigYml: "Check your config.yml file.",
                        loadingConfig: "Loading configuration...",
                        waitingBackend: "Waiting for backend...",
                    },
                    notFoundPage: { header: "Not Found" },
                },
                collection: {
                    sidebar: { collections: "Collections", allCollections: "All Collections", searchAll: "Search all", searchIn: "Search in" },
                    collectionTop: {
                        sortBy: "Sort by",
                        viewAs: "View as",
                        newButton: "New %{collectionLabel}",
                        ascending: "Ascending",
                        descending: "Descending",
                        searchResults: 'Search Results for "%{searchTerm}"',
                        searchResultsInCollection: 'Search Results for "%{searchTerm}" in %{collection}',
                        filterBy: "Filter by",
                        groupBy: "Group by",
                    },
                    entries: { loadingEntries: "Loading Entries...", cachingEntries: "Caching Entries...", longerLoading: "This might take several minutes", noEntries: "No Entries" },
                    groups: { other: "Other", negateLabel: "Not %{label}" },
                    defaultFields: { author: { label: "Author" }, updatedOn: { label: "Updated On" } },
                },
                editor: {
                    editorControl: { field: { optional: "optional" } },
                    editorControlPane: {
                        widget: {
                            required: "%{fieldLabel} is required.",
                            regexPattern: "%{fieldLabel} didn't match the pattern: %{pattern}.",
                            processing: "%{fieldLabel} is processing.",
                            range: "%{fieldLabel} must be between %{minValue} and %{maxValue}.",
                            min: "%{fieldLabel} must be at least %{minValue}.",
                            max: "%{fieldLabel} must be %{maxValue} or less.",
                            rangeCount: "%{fieldLabel} must have between %{minCount} and %{maxCount} item(s).",
                            rangeCountExact: "%{fieldLabel} must have exactly %{count} item(s).",
                            minCount: "%{fieldLabel} must be at least %{minCount} item(s).",
                            maxCount: "%{fieldLabel} must be %{maxCount} or less item(s).",
                            invalidPath: "'%{path}' is not a valid path",
                            pathExists: "Path '%{path}' already exists",
                        },
                        i18n: { writingInLocale: "Writing in %{locale}" },
                    },
                    editor: {
                        onLeavePage: "Are you sure you want to leave this page?",
                        onUpdatingWithUnsavedChanges: "You have unsaved changes, please save before updating status.",
                        onPublishingNotReady: 'Please update status to "Ready" before publishing.',
                        onPublishingWithUnsavedChanges: "You have unsaved changes, please save before publishing.",
                        onPublishing: "Are you sure you want to publish this entry?",
                        onUnpublishing: "Are you sure you want to unpublish this entry?",
                        onDeleteWithUnsavedChanges: "Are you sure you want to delete this published entry, as well as your unsaved changes from the current session?",
                        onDeletePublishedEntry: "Are you sure you want to delete this published entry?",
                        onDeleteUnpublishedChangesWithUnsavedChanges: "This will delete all unpublished changes to this entry, as well as your unsaved changes from the current session. Do you still want to delete?",
                        onDeleteUnpublishedChanges: "All unpublished changes to this entry will be deleted. Do you still want to delete?",
                        loadingEntry: "Loading entry...",
                        confirmLoadBackup: "A local backup was recovered for this entry, would you like to use it?",
                    },
                    editorInterface: { toggleI18n: "Toggle i18n", togglePreview: "Toggle preview", toggleScrollSync: "Sync scrolling" },
                    editorToolbar: {
                        publishing: "Publishing...",
                        publish: "Publish",
                        published: "Published",
                        unpublish: "Unpublish",
                        duplicate: "Duplicate",
                        unpublishing: "Unpublishing...",
                        publishAndCreateNew: "Publish and create new",
                        publishAndDuplicate: "Publish and duplicate",
                        deleteUnpublishedChanges: "Delete unpublished changes",
                        deleteUnpublishedEntry: "Delete unpublished entry",
                        deletePublishedEntry: "Delete published entry",
                        deleteEntry: "Delete entry",
                        saving: "Saving...",
                        save: "Save",
                        deleting: "Deleting...",
                        updating: "Updating...",
                        setStatus: "Set status",
                        backCollection: " Writing in %{collectionLabel} collection",
                        unsavedChanges: "Unsaved Changes",
                        changesSaved: "Changes saved",
                        draft: "Draft",
                        inReview: "In review",
                        ready: "Ready",
                        publishNow: "Publish now",
                        deployPreviewPendingButtonLabel: "Check for Preview",
                        deployPreviewButtonLabel: "View Preview",
                        deployButtonLabel: "View Live",
                    },
                    editorWidgets: {
                        markdown: {
                            bold: "Bold",
                            italic: "Italic",
                            code: "Code",
                            link: "Link",
                            linkPrompt: "Enter the URL of the link",
                            headings: "Headings",
                            quote: "Quote",
                            bulletedList: "Bulleted List",
                            numberedList: "Numbered List",
                            addComponent: "Add Component",
                            richText: "Rich Text",
                            markdown: "Markdown",
                        },
                        image: { choose: "Choose an image", chooseUrl: "Insert from URL", replaceUrl: "Replace with URL", promptUrl: "Enter the URL of the image", chooseDifferent: "Choose different image", remove: "Remove image" },
                        file: { choose: "Choose a file", chooseUrl: "Insert from URL", replaceUrl: "Replace with URL", promptUrl: "Enter the URL of the file", chooseDifferent: "Choose different file", remove: "Remove file" },
                        unknownControl: { noControl: "No control for widget '%{widget}'." },
                        unknownPreview: { noPreview: "No preview for widget '%{widget}'." },
                        headingOptions: { headingOne: "Heading 1", headingTwo: "Heading 2", headingThree: "Heading 3", headingFour: "Heading 4", headingFive: "Heading 5", headingSix: "Heading 6" },
                        datetime: { now: "Now" },
                    },
                },
                mediaLibrary: {
                    mediaLibraryCard: { draft: "Draft", copy: "Copy", copyUrl: "Copy URL", copyPath: "Copy Path", copyName: "Copy Name", copied: "Copied" },
                    mediaLibrary: { onDelete: "Are you sure you want to delete selected media?", fileTooLarge: "File too large.\nConfigured to not allow files greater than %{size} kB." },
                    mediaLibraryModal: {
                        loading: "Loading...",
                        noResults: "No results.",
                        noAssetsFound: "No assets found.",
                        noImagesFound: "No images found.",
                        private: "Private ",
                        images: "Images",
                        mediaAssets: "Media assets",
                        search: "Search...",
                        uploading: "Uploading...",
                        upload: "Upload",
                        download: "Download",
                        deleting: "Deleting...",
                        deleteSelected: "Delete selected",
                        chooseSelected: "Choose selected",
                    },
                },
                ui: {
                    default: { goBackToSite: "Go back to site" },
                    errorBoundary: {
                        title: "Error",
                        details: "There's been an error - please ",
                        reportIt: "open an issue on GitHub.",
                        detailsHeading: "Details",
                        privacyWarning: "Opening an issue pre-populates it with the error message and debugging data.\nPlease verify the information is correct and remove sensitive data if exists.",
                        recoveredEntry: { heading: "Recovered document", warning: "Please copy/paste this somewhere before navigating away!", copyButtonLabel: "Copy to clipboard" },
                    },
                    settingsDropdown: { logOut: "Log Out" },
                    toast: {
                        onFailToLoadEntries: "Failed to load entry: %{details}",
                        onFailToLoadDeployPreview: "Failed to load preview: %{details}",
                        onFailToPersist: "Failed to persist entry: %{details}",
                        onFailToDelete: "Failed to delete entry: %{details}",
                        onFailToUpdateStatus: "Failed to update status: %{details}",
                        missingRequiredField: "Oops, you've missed a required field. Please complete before saving.",
                        entrySaved: "Entry saved",
                        entryPublished: "Entry published",
                        entryUnpublished: "Entry unpublished",
                        onFailToPublishEntry: "Failed to publish: %{details}",
                        onFailToUnpublishEntry: "Failed to unpublish entry: %{details}",
                        entryUpdated: "Entry status updated",
                        onDeleteUnpublishedChanges: "Unpublished changes deleted",
                        onFailToAuth: "%{details}",
                        onLoggedOut: "You have been logged out, please back up any data and login again",
                        onBackendDown: "The backend service is experiencing an outage. See %{details} for more information",
                    },
                },
                workflow: {
                    workflow: {
                        loading: "Loading Editorial Workflow Entries",
                        workflowHeading: "Editorial Workflow",
                        newPost: "New Post",
                        description: "%{smart_count} entry waiting for review, %{readyCount} ready to go live. |||| %{smart_count} entries waiting for review, %{readyCount} ready to go live. ",
                        dateFormat: "MMMM D",
                    },
                    workflowCard: {
                        lastChange: "%{date} by %{author}",
                        lastChangeNoAuthor: "%{date}",
                        lastChangeNoDate: "by %{author}",
                        deleteChanges: "Delete changes",
                        deleteNewEntry: "Delete new entry",
                        publishChanges: "Publish changes",
                        publishNewEntry: "Publish new entry",
                    },
                    workflowList: {
                        onDeleteEntry: "Are you sure you want to delete this entry?",
                        onPublishingNotReadyEntry: 'Only items with a "Ready" status can be published. Please drag the card to the "Ready" column to enable publishing.',
                        onPublishEntry: "Are you sure you want to publish this entry?",
                        draftHeader: "Drafts",
                        inReviewHeader: "In Review",
                        readyHeader: "Ready",
                        currentEntries: "%{smart_count} entry |||| %{smart_count} entries",
                    },
                },
            };
            var p = {
                auth: {
                    login: "Login",
                    loggingIn: "Logging in...",
                    loginWithNetlifyIdentity: "Login with Netlify Identity",
                    loginWithAzure: "Login with Azure",
                    loginWithBitbucket: "Login with Bitbucket",
                    loginWithGitHub: "Login with GitHub",
                    loginWithGitLab: "Login with GitLab",
                    errors: {
                        email: "Make sure to enter your email.",
                        password: "Please enter your password.",
                        identitySettings: "Unable to access identity settings. When using git-gateway backend make sure to enable Identity service and Git Gateway.",
                    },
                },
                app: {
                    header: { content: "Konten", workflow: "Workflow", media: "Media", quickAdd: "Tambah baru" },
                    app: {
                        errorHeader: "Error loading the CMS configuration",
                        configErrors: "Config Errors",
                        checkConfigYml: "Check your config.yml file.",
                        loadingConfig: "Loading configuration...",
                        waitingBackend: "Waiting for backend...",
                    },
                    notFoundPage: { header: "Not Found" },
                },
                collection: {
                    sidebar: { collections: "Koleksi", allCollections: "Semua Koleksi", searchAll: "Search all", searchIn: "Search in" },
                    collectionTop: {
                        sortBy: "Sort by",
                        viewAs: "View as",
                        newButton: "New %{collectionLabel}",
                        ascending: "Ascending",
                        descending: "Descending",
                        searchResults: 'Search Results for "%{searchTerm}"',
                        searchResultsInCollection: 'Search Results for "%{searchTerm}" in %{collection}',
                        filterBy: "Filter by",
                        groupBy: "Group by",
                    },
                    entries: { loadingEntries: "Loading Entries...", cachingEntries: "Caching Entries...", longerLoading: "This might take several minutes", noEntries: "Tidak ada postingan" },
                    groups: { other: "Other", negateLabel: "Not %{label}" },
                    defaultFields: { author: { label: "Author" }, updatedOn: { label: "Updated On" } },
                },
                editor: {
                    editorControl: { field: { optional: "optional" } },
                    editorControlPane: {
                        widget: {
                            required: "%{fieldLabel} is required.",
                            regexPattern: "%{fieldLabel} didn't match the pattern: %{pattern}.",
                            processing: "%{fieldLabel} is processing.",
                            range: "%{fieldLabel} must be between %{minValue} and %{maxValue}.",
                            min: "%{fieldLabel} must be at least %{minValue}.",
                            max: "%{fieldLabel} must be %{maxValue} or less.",
                            rangeCount: "%{fieldLabel} must have between %{minCount} and %{maxCount} item(s).",
                            rangeCountExact: "%{fieldLabel} must have exactly %{count} item(s).",
                            minCount: "%{fieldLabel} must be at least %{minCount} item(s).",
                            maxCount: "%{fieldLabel} must be %{maxCount} or less item(s).",
                            invalidPath: "'%{path}' is not a valid path",
                            pathExists: "Path '%{path}' already exists",
                        },
                        i18n: { writingInLocale: "Writing in %{locale}" },
                    },
                    editor: {
                        onLeavePage: "Are you sure you want to leave this page?",
                        onUpdatingWithUnsavedChanges: "You have unsaved changes, please save before updating status.",
                        onPublishingNotReady: 'Please update status to "Ready" before publishing.',
                        onPublishingWithUnsavedChanges: "You have unsaved changes, please save before publishing.",
                        onPublishing: "Are you sure you want to publish this entry?",
                        onUnpublishing: "Are you sure you want to unpublish this entry?",
                        onDeleteWithUnsavedChanges: "Are you sure you want to delete this published entry, as well as your unsaved changes from the current session?",
                        onDeletePublishedEntry: "Are you sure you want to delete this published entry?",
                        onDeleteUnpublishedChangesWithUnsavedChanges: "This will delete all unpublished changes to this entry, as well as your unsaved changes from the current session. Do you still want to delete?",
                        onDeleteUnpublishedChanges: "All unpublished changes to this entry will be deleted. Do you still want to delete?",
                        loadingEntry: "Loading entry...",
                        confirmLoadBackup: "A local backup was recovered for this entry, would you like to use it?",
                    },
                    editorInterface: { toggleI18n: "Toggle i18n", togglePreview: "Toggle preview", toggleScrollSync: "Sync scrolling" },
                    editorToolbar: {
                        publishing: "Publishing...",
                        publish: "Publish",
                        published: "Published",
                        unpublish: "Unpublish",
                        duplicate: "Duplicate",
                        unpublishing: "Unpublishing...",
                        publishAndCreateNew: "Publish and create new",
                        publishAndDuplicate: "Publish and duplicate",
                        deleteUnpublishedChanges: "Delete unpublished changes",
                        deleteUnpublishedEntry: "Delete unpublished entry",
                        deletePublishedEntry: "Delete published entry",
                        deleteEntry: "Delete entry",
                        saving: "Saving...",
                        save: "Save",
                        deleting: "Deleting...",
                        updating: "Updating...",
                        setStatus: "Set status",
                        backCollection: " Writing in %{collectionLabel} collection",
                        unsavedChanges: "Unsaved Changes",
                        changesSaved: "Changes saved",
                        draft: "Draft",
                        inReview: "In review",
                        ready: "Ready",
                        publishNow: "Publish now",
                        deployPreviewPendingButtonLabel: "Check for Preview",
                        deployPreviewButtonLabel: "View Preview",
                        deployButtonLabel: "View Live",
                    },
                    editorWidgets: {
                        markdown: {
                            bold: "Bold",
                            italic: "Italic",
                            code: "Code",
                            link: "Link",
                            linkPrompt: "Enter the URL of the link",
                            headings: "Headings",
                            quote: "Quote",
                            bulletedList: "Bulleted List",
                            numberedList: "Numbered List",
                            addComponent: "Add Component",
                            richText: "Rich Text",
                            markdown: "Markdown",
                        },
                        image: { choose: "Choose an image", chooseUrl: "Insert from URL", replaceUrl: "Replace with URL", promptUrl: "Enter the URL of the image", chooseDifferent: "Choose different image", remove: "Remove image" },
                        file: { choose: "Choose a file", chooseUrl: "Insert from URL", replaceUrl: "Replace with URL", promptUrl: "Enter the URL of the file", chooseDifferent: "Choose different file", remove: "Remove file" },
                        unknownControl: { noControl: "No control for widget '%{widget}'." },
                        unknownPreview: { noPreview: "No preview for widget '%{widget}'." },
                        headingOptions: { headingOne: "Heading 1", headingTwo: "Heading 2", headingThree: "Heading 3", headingFour: "Heading 4", headingFive: "Heading 5", headingSix: "Heading 6" },
                        datetime: { now: "Now" },
                    },
                },
                mediaLibrary: {
                    mediaLibraryCard: { draft: "Draft", copy: "Copy", copyUrl: "Copy URL", copyPath: "Copy Path", copyName: "Copy Name", copied: "Copied" },
                    mediaLibrary: { onDelete: "Are you sure you want to delete selected media?", fileTooLarge: "File too large.\nConfigured to not allow files greater than %{size} kB." },
                    mediaLibraryModal: {
                        loading: "Loading...",
                        noResults: "No results.",
                        noAssetsFound: "No assets found.",
                        noImagesFound: "No images found.",
                        private: "Private ",
                        images: "Images",
                        mediaAssets: "Media assets",
                        search: "Search...",
                        uploading: "Uploading...",
                        upload: "Upload",
                        download: "Download",
                        deleting: "Deleting...",
                        deleteSelected: "Delete selected",
                        chooseSelected: "Choose selected",
                    },
                },
                ui: {
                    default: { goBackToSite: "Go back to site" },
                    errorBoundary: {
                        title: "Error",
                        details: "There's been an error - please ",
                        reportIt: "open an issue on GitHub.",
                        detailsHeading: "Details",
                        privacyWarning: "Opening an issue pre-populates it with the error message and debugging data.\nPlease verify the information is correct and remove sensitive data if exists.",
                        recoveredEntry: { heading: "Recovered document", warning: "Please copy/paste this somewhere before navigating away!", copyButtonLabel: "Copy to clipboard" },
                    },
                    settingsDropdown: { logOut: "Log Out" },
                    toast: {
                        onFailToLoadEntries: "Failed to load entry: %{details}",
                        onFailToLoadDeployPreview: "Failed to load preview: %{details}",
                        onFailToPersist: "Failed to persist entry: %{details}",
                        onFailToDelete: "Failed to delete entry: %{details}",
                        onFailToUpdateStatus: "Failed to update status: %{details}",
                        missingRequiredField: "Oops, you've missed a required field. Please complete before saving.",
                        entrySaved: "Entry saved",
                        entryPublished: "Entry published",
                        entryUnpublished: "Entry unpublished",
                        onFailToPublishEntry: "Failed to publish: %{details}",
                        onFailToUnpublishEntry: "Failed to unpublish entry: %{details}",
                        entryUpdated: "Entry status updated",
                        onDeleteUnpublishedChanges: "Unpublished changes deleted",
                        onFailToAuth: "%{details}",
                        onLoggedOut: "You have been logged out, please back up any data and login again",
                        onBackendDown: "The backend service is experiencing an outage. See %{details} for more information",
                    },
                },
                workflow: {
                    workflow: {
                        loading: "Loading Editorial Workflow Entries",
                        workflowHeading: "Editorial Workflow",
                        newPost: "New Post",
                        description: "%{smart_count} entry waiting for review, %{readyCount} ready to go live. |||| %{smart_count} entries waiting for review, %{readyCount} ready to go live. ",
                        dateFormat: "MMMM D",
                    },
                    workflowCard: {
                        lastChange: "%{date} by %{author}",
                        lastChangeNoAuthor: "%{date}",
                        lastChangeNoDate: "by %{author}",
                        deleteChanges: "Delete changes",
                        deleteNewEntry: "Delete new entry",
                        publishChanges: "Publish changes",
                        publishNewEntry: "Publish new entry",
                    },
                    workflowList: {
                        onDeleteEntry: "Are you sure you want to delete this entry?",
                        onPublishingNotReadyEntry: 'Only items with a "Ready" status can be published. Please drag the card to the "Ready" column to enable publishing.',
                        onPublishEntry: "Are you sure you want to publish this entry?",
                        draftHeader: "Drafts",
                        inReviewHeader: "In Review",
                        readyHeader: "Ready",
                        currentEntries: "%{smart_count} entry |||| %{smart_count} entries",
                    },
                },
            };
        },
    ]).NetlifyCmsLocales;
});
